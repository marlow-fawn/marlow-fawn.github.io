import './App.css';
import {
    Box,
    Container,
    createTheme,
    Grid,
    Typography,
    ThemeProvider,
    Paper,
    Card,
    CardMedia, CardContent
} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {Carousel} from 'react-responsive-carousel';

function App() {

    const theme = createTheme({
        palette: {
            secondary: {
                main: "#FDF5E6"
            }
        },
        typography: {
            fontFamily: 'Lora, Arial',
            h1: {},
            h2: {
                fontFamily: 'Lato, Arial',
            },
            h3: {
                fontFamily: 'Lora, Arial',
            },
            h4: {
                fontFamily: 'Lato, Arial',
            },
            body1: {
                // fontFamily: 'Lato, Arial',
            }
        }
    })

    const items = [
        {
            image: "/sukkah.jpg",
            description: "Sukkah, built by hand"
        },
        {
            image: "/tetherbot.jpg",
            description: "Early stages of the Tetherbot project"
        },
        {
            image: "/board.jpg",
            description: "This cutting board was an early woodworking project"
        },
        {
            image: "/perg.png",
            description: "Plans for a pergola"
        },
        {
            image: "/slicer.png",
            description: "Assistive feeding device prototype"
        }
    ];

    function Item(props) {
        return (
            <Card elevation={0} style={{backgroundColor: "OldLace"}} >
                <CardMedia component="img" image={props.item.image}/>
                <CardContent>
                    <Typography variant="caption">{props.item.description}</Typography>
                </CardContent>
            </Card>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Box paddingY={2}>
                <Container>
                    <Paper elevation={8}>
                        <Box p={3} bgcolor="OldLace">
                            <Grid container spacing={5} direction="row"
                                  alignItems="center"
                                  justifyContent="center">
                                <Grid item xs={12} lg={6}>
                                    <Box>
                                        <img src="/mushroom.jpg" width="100%" style={{borderRadius: "50%"}}/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Typography variant="h2">
                                        MARLOW FAWN
                                    </Typography>
                                    <Typography variant="caption">
                                        They/Them Pronouns | Malden MA, 02148 | (310) 892-7582 |
                                        marlow.fawn@gmail.com
                                    </Typography>
                                    <Typography variant="body1">
                                        Software engineer for <a href="https://thinkingrobots.ai/">Thinking Robots
                                        Inc</a> with
                                        a background in mechanical engineering. Interested in assistive robotics and
                                        accessible
                                        tech.<br/>
                                        <br/>
                                        You can view my <a href="">resume here</a>.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box bgcolor="DarkOliveGreen">
                            <Box p={3}>
                                <Grid container spacing={5} direction="row"
                                      alignItems="center"
                                      justifyContent="center">
                                    <Grid item xs={12} lg={6}>
                                        <Carousel>
                                            {
                                                items.map((item, i) => <Item key={i} item={item}/>)
                                            }
                                        </Carousel>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        {/*<Typography variant="h3" color="secondary"  gutterBottom={true}>*/}
                                        {/*    Projects & Hobbies*/}
                                        {/*</Typography>*/}
                                        <Typography variant="h4" color="secondary">
                                            Maker Projects
                                        </Typography>
                                        <Typography variant="body1" color="secondary"  gutterBottom={true}>
                                            My maker skills aren't just for work - I also use CAD, woodworking, 3D
                                            printing, and
                                            laser cutting for personal projects. I've made furniture, utensils, and
                                            other
                                            functional
                                            items in my free time, both for myself and for those in my community.
                                            Woodworking
                                            gives
                                            me a way to use my engineering skills while incorporating a personal
                                            sense
                                            of
                                            aesthetic
                                            and artistry.
                                        </Typography>
                                        <Typography variant="h4" color="secondary">
                                            Music
                                        </Typography>
                                        <Typography variant="body1" color="secondary">
                                            I also write, perform, and produce my own music. My influences are
                                            primarily
                                            from
                                            jazz
                                            (bebop), experimental pop, and indie rock. While I grew up playing
                                            piano,
                                            most of my
                                            songwriting work is done on acoustic guitar.
                                            While I used to take commissions for personal or indie commercial use, I
                                            solely
                                            write
                                            for my own enjoyment these days.
                                        </Typography>
                                        <Typography variant="body1" color="secondary"  gutterBottom={true}>
                                            You can check out my first album <a
                                            href="https://borrowerband.bandcamp.com/">here</a>.
                                        </Typography>
                                        <Typography variant="h4" color="secondary">
                                            Writing
                                        </Typography>
                                        <Typography variant="body1" color="secondary">
                                            Though a relatively new hobby of mine, writing has allowed me to expand
                                            a
                                            more
                                            personal
                                            side to my art through prose (particularly sci-fi) and poetry. Though
                                            none
                                            of my
                                            writing
                                            is
                                            available to the public yet, I have been working on a series of short
                                            stories that
                                            may
                                            be available some time in the future.
                                        </Typography>

                                    </Grid>


                                </Grid>
                            </Box>
                        </Box>

                        <Box bgcolor="OldLace" py={3}>


                            <Box justifyContent="center" display="flex">
                                <Typography variant="h4">
                                    Contact
                                </Typography>

                            </Box>
                            <Box justifyContent="center" display="flex" textAlign="center">
                                <Typography variant="body1">
                                    Phone: (310) 892-7582 <br/>
                                    E-mail: marlow.fawn@gmail.com<br/>
                                </Typography>
                            </Box>
                        </Box>

                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
