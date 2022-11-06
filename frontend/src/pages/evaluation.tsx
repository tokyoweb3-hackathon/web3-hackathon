import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography
} from "@mui/material";
import React from "react";
import { Layout } from "../../layout/Layout";
import PieChartIcon from "@mui/icons-material/PieChart";
import { EvaluationReport } from "../components/EvaluationReport";
import { useRouter } from "next/router";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function Evaluation() {
  const router = useRouter();
  const onLink = (href: string) => {
    router.push(href);
  };
  const [ value, setValue ] = React.useState(0);
  const handleChange = ( event: React.SyntheticEvent, newValue: number ) => {
    setValue(newValue);
  };

  return (
      <Layout
        fab={
          <>
            <PieChartIcon sx={{ mr: 1 }} onClick={() => onLink("/createAddress")} />
            評価設定
          </>
        }
      >
        <Container component="main" maxWidth="xs" sx={{ pr: 4, pl: 4 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
              <Tab label="受けた評価" {...a11yProps(0)} />
              <Tab label="行った評価" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <EvaluationReport/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Container>
      </Layout>
  )
}
