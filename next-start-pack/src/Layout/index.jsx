import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { Menu, Inbox, Mail } from '@mui/icons-material';
import React, { useState } from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDrawer = event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setMobileOpen(prev => !prev);
    };

    const list = anchor => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onKeyDown={toggleDrawer}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
                    return (
                        <ListItem key={text} disablePadding>
                            <Link
                                href={`/category/${text.replace(/ /gi, '')}`}
                                style={{ textDecoration: 'none', color: 'black' }}
                            >
                                <ListItemButton onClick={toggleDrawer}>
                                    <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <Link
                            href={`/category/${text.replace(/ /gi, '')}`}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <ListItemButton onClick={toggleDrawer}>
                                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <header>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer}
                            >
                                <Menu />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                                News
                            </Typography>
                            <Link href={`/login`} style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit">Login</Button>
                            </Link>
                        </Toolbar>
                    </AppBar>
                </Box>

                <div>
                    <React.Fragment>
                        <Drawer open={mobileOpen} anchor="left" onClose={toggleDrawer}>
                            {list('left')}
                        </Drawer>
                    </React.Fragment>
                </div>
            </header>

            <main>{children}</main>

            <footer>푸터</footer>
        </div>
    );
};

export default Layout;
