import logo from './logo.svg';
import './App.css';
import {Box, Container, Grid, Typography} from "@material-ui/core";

function App() {
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Box>
                            <img src="/columbo-main-NEW.jpeg" width="100%"/>
                        </Box>

                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h2">
                            MARLOW FAWN
                        </Typography>
                        <Typography variant="caption">
                            They/Them Pronouns - Malden MA, 02148 - (310) 892-7582 - marlow.fawn@gmail.com
                        </Typography>
                        <Typography variant="body1">
                            Software engineer for <a href="">Thinking Robots Inc.</a> <br/>
                            Queer. Maker. Musician.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img src="/776589099607654410.jpeg" width="100%"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h3">
                            About
                        </Typography>
                        <Typography variant="body1">
                            Roboticist living in the Boston area. Pursuing software engineering with a background in mechanical engineering. Interested in assistive robotics and accessible tech.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img src="/columbo2.jpeg"  width="100%"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h1">
                            Projects & Hobbies
                        </Typography>
                        <Typography variant="body1">
                            It'sa me, marlow
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img src="/columbo3.jpeg"  width="100%"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h1">
                            Resume
                        </Typography>
                        <Typography variant="body1">
                            It'sa me, marlow
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img src="/Karkat_Vantas.png"  width="100%"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant="h1">
                            Contact
                        </Typography>
                        <Typography variant="body1">
                            It'sa me, marlow
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default App;
