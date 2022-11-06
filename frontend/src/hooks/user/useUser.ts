import { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import * as jdenticon from "jdenticon";

type User = {
  userName: string;
  discription: string;
  imageUrl: string;
};

export const useUser = (init: { initAccount?: string }) => {
  const [user, setUser] = useState<User>({
    userName: "",
    discription: "",
    imageUrl: "",
  });

  const sha256 = async (text: string) => {
    const uint8 = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", uint8);
    return Array.from(new Uint8Array(digest))
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("");
  };

  const getUser = async ({ accountAddress }: { accountAddress: string }) => {
    const hash = await sha256(accountAddress);
    const user = await getDoc(doc(db, "users", hash));

    if (!user.exists()) {
      return null;
    }

    return user.data() as User;
  };

  const createUser = async ({
    accountAddress,
    ...params
  }: {
    accountAddress: string;
    userName: string;
    discription: string;
    imageUrl: string;
  }) => {
    try {
      const hash = await sha256(accountAddress);
      await setDoc(doc(db, "users", hash), params);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    if (!init?.initAccount) {
      return;
    }

    getUser({ accountAddress: init.initAccount }).then(async (data) => {
      if (!data) {
        return;
      }

      if (init?.initAccount) {
        const hash = await sha256(init.initAccount);
        const svgString = jdenticon.toSvg(hash, 100);

        setUser({
          ...data,
          imageUrl: svgString,
        });
        return;
      }

      setUser(data);
    });
  }, [init.initAccount]);

  return {
    getUser,
    createUser,
    setUser,
    user,
  };
};
