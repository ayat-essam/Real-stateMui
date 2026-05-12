// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   IconButton,
//   LinearProgress,
//   Chip,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Badge,
//   Tooltip,
// } from "@mui/material";

// const stats = [
//   { label: "Total Users",    value: "1,240"},
//   { label: "Revenue",        value: "$8,350"},
//   { label: "New Orders",     value: "340"},
//   { label: "Pending Tasks",  value: "18",},
// ];

// const recentUsers = [
//   { name: "Ahmed Ali",    role: "Admin",    avatar: "A", status: "online" },
//   { name: "Sara Mohamed", role: "Editor",   avatar: "S", status: "offline" },
//   { name: "Omar Hassan",  role: "Viewer",   avatar: "O", status: "online" },
//   { name: "Nour Ibrahim", role: "Designer", avatar: "N", status: "away" },
// ];

// const tasks = [
//   { label: "Design UI",       progress: 80,  color: "primary" },
//   { label: "Backend API",     progress: 55,  color: "primary" },
//   { label: "Testing",         progress: 30,  color: "primary" },
//   { label: "Documentation",   progress: 10,  color: "primary"   },
// ];
// const statusColor = { online: "success", offline: "default", away: "warning" };
// export default function Dashboard() {

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         bgcolor:  "#f5f5f5",
//         color:  "#000",
//         p: 3,
//         transition: "background 0.3s",
//       }}
//     >
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
//         <Typography variant="h4" fontWeight={700}>
//            Dashboard
//         </Typography>

//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        

//           <Tooltip title="Notifications">
//             <IconButton>
//               <Badge badgeContent={4} color="error">
//                 🔔
//               </Badge>
//             </IconButton>
//           </Tooltip>
//           <Avatar sx={{ bgcolor: "#9c870d" }}>A</Avatar>
//         </Box>
//       </Box>
//       <Grid container spacing={2} mb={3}>
//         {stats.map((stat) => (
//           <Grid item xs={12} sm={6} md={3} key={stat.label}>
//             <Card elevation={3}>
//               <CardContent sx={{
//                  display: "flex", alignItems: "center", gap: 2 }}>
                
//                 <Box>
//                   <Typography variant="h5" fontWeight={700}>
//                     {stat.value}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {stat.label}
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Card elevation={3}>
//             <CardContent>
//               <Typography variant="h6" fontWeight={600} mb={2}>
//                  Tasks Progress
//               </Typography>

//               {tasks.map((task) => (
//                 <Box key={task.label} mb={2}>
//                   <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                     <Typography variant="body2">{task.label}</Typography>
//                     <Typography variant="body2">{task.progress}%</Typography>
//                   </Box>
//                   <LinearProgress
//                     variant="determinate"
//                     value={task.progress}
//                     color={task.color}
//                     sx={{ height: 8, borderRadius: 4, mt: 0.5 }}
//                   />
//                 </Box>
//               ))}

              
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card elevation={3}>
//             <CardContent>
//               <Typography variant="h6" fontWeight={600} mb={1}>
//                 Recent Users
//               </Typography>

//               <List>
//                 {recentUsers.map((user) => (
//                   <Box key={user.name}>
//                     <ListItem
//                       secondaryAction={
//                         <Chip
//                           label={user.status}
//                           color={statusColor[user.status]}
//                           size="small"
//                         />}>
//                       <ListItemAvatar>
//                         <Avatar sx={{ bgcolor: "#1976d2" }}>{user.avatar}</Avatar>
//                       </ListItemAvatar>
//                       <ListItemText
//                         primary={user.name}
//                         secondary={user.role}
//                       />
//                     </ListItem>
                    
//                   </Box>
//                 ))}
//               </List>

              
//             </CardContent>
//           </Card>
//         </Grid>

//       </Grid>
//     </Box>
//   );
// }
import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,

  AppBar,
  Toolbar,
  Drawer,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";

const DRAWER_WIDTH = 220;

const navItems = [
  { label: "Dashboard",   },
  { label: "Users",      },
  { label: "Orders",     },
  { label: "Tasks",     },
  { label: "Revenue",   },
  { label: "Settings",    },
];

const stats = [
  { label: "Total Users",   value: "1,240" },
  { label: "Revenue",       value: "$8,350" },
  { label: "New Orders",    value: "340" },
  { label: "Pending Tasks", value: "18" },
];

const recentUsers = [
  { name: "Ahmed Ali",    role: "Admin",    avatar: "A", status: "online" },
  { name: "Sara Mohamed", role: "Editor",   avatar: "S", status: "offline" },
  { name: "Omar Hassan",  role: "Viewer",   avatar: "O", status: "online" },
  { name: "Nour Ibrahim", role: "Designer", avatar: "N", status: "away" },
];

const tasks = [
  { label: "Design UI",     progress: 80, color: "primary" },
  { label: "Backend API",   progress: 55, color: "primary" },
  { label: "Testing",       progress: 30, color: "primary" },
  { label: "Documentation", progress: 10, color: "primary" },
];

const statusColor = { online: "success", offline: "default", away: "warning" };

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Drawer
        variant="persistent"
        open={drawerOpen}
        sx={{
          width: drawerOpen ? DRAWER_WIDTH : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            bgcolor: "#1e1e2e",
            color: "#fff",
            pt: 1,
          },
        }}
      >
        <Box sx={{ px: 2, py: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" fontWeight={700} color="#fff">
            Real-state
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#ffffff22" }} />
        <List sx={{ mt: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.label}
              selected={activeNav === item.label}
              onClick={() => setActiveNav(item.label)}
              sx={{
                borderRadius: 2,
                mx: 1,
                mb: 0.5,
                color: "#ccc",
                "&.Mui-selected": {
                  bgcolor: "#1976d2",
                  color: "#fff",
                  "&:hover": { bgcolor: "#1565c0" },
                },
                "&:hover": { bgcolor: "#ffffff11" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, fontSize: 18 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <AppBar
          position="static"
          elevation={1}
          sx={{ bgcolor: "#fff", color: "#000" }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                ☰
              </IconButton>
              <Typography variant="h6" fontWeight={600}>
                {activeNav}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              
              <Avatar sx={{ bgcolor: "#9c870d" }}>A</Avatar>
            </Box>

          </Toolbar>
        </AppBar>
        <Box sx={{ p: 3, flexGrow: 1 }}>
          <Grid container spacing={2} mb={3}>
            {stats.map((stat) => (
              <Grid item xs={12} sm={6} md={3} key={stat.label}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h5" fontWeight={700}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Tasks Progress
                  </Typography>
                  {tasks.map((task) => (
                    <Box key={task.label} mb={2}>
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="body2">{task.label}</Typography>
                        <Typography variant="body2">{task.progress}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={task.progress}
                        color={task.color}
                        sx={{ height: 8, borderRadius: 4, mt: 0.5 }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    Recent Users
                  </Typography>
                  <List>
                    {recentUsers.map((user) => (
                      <ListItem
                        key={user.name}
                        secondaryAction={
                          <Chip
                            label={user.status}
                            color={statusColor[user.status]}
                            size="small"
                          />
                        }
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#1976d2" }}>{user.avatar}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.name} secondary={user.role} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Box>
  );
}