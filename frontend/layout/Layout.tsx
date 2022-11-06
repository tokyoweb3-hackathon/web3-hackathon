import styled from "@emotion/styled";
import { Fab, Paper } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import BottomNavigationBar from "./BottomNavigationBar";

type LayoutProps = {
  readonly children: ReactElement;
  readonly fab?: ReactNode;
  readonly onFabClick?: () => void;
};

const LayoutContainer = styled.div`
  position: relative;
`;

const FloatingActionButton = styled(Fab)<{ bottomNavHeight?: number }>`
  position: fixed;
  bottom: calc(56px + 16px);
  right: 16px;
`;

export const Layout = ({
  children,
  fab,
  onFabClick,
  ...props
}: LayoutProps) => {
  return (
    <LayoutContainer>
      {children}
      {fab ? (
        <FloatingActionButton
          color="primary"
          variant="extended"
          aria-label="request"
          size="medium"
          onClick={onFabClick}
          {...props}
        >
          {fab}
        </FloatingActionButton>
      ) : null}

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigationBar />
      </Paper>
    </LayoutContainer>
  );
};
