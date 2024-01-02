import { Container, Box } from "@mui/system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <Container>
            <Box>
                <a href="">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

            </Box>
            <Box>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>

            </Box>
            <Box>
                <a href="">
                <FontAwesomeIcon icon={faTwitter} />

                </a>

            </Box>
            <Box>
                <a href="">
                <FontAwesomeIcon icon={faTwitter} />

                </a>

            </Box>

        </Container>
    )


}