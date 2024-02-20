'use client'
import Navbar from "./components/navbar";
import { Box } from '@mui/material';
import Sidebar from "./components/sidebar";
import Explorer from "./manage_data/explorer";
import Tagger from "./manage_data/tagger";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <Box sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        height: "100vh",
      }}>
        <Sidebar />
        <Explorer no_of_boxes={6}/>
        <Tagger no_of_boxes={4}/>
      </Box>
    </main>
  );
}
