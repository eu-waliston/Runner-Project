import React from "react";
import "./Characters.scss";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Characters = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section id="characters-section">
      <h2
        class="characters"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2000"
      >
        Characters
      </h2>

      <div class="personages">
        <div>
          <Button onClick={handleOpen}>
            <img src="/images/elle.png" alt="Elle" class="c-img" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Elle - Jessica Henwick (English) and Arisa Shida (Japanese)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                The main character of Blade Runner: Black Lotus, Elle is a woman
                without a past and an uncertain future. Elle is voiced in the
                English version by Jessica Henwick, who previously voiced Alexia
                in Netflix's Blood of Zeus and will soon be appearing opposite
                Keanu Reeves in The Matrix Resurrections. In the Japanese Blade
                Runner cast, Elle is voiced by Arisa Shida, who is best known as
                Ameno in the Japanese version of Naruto: Shippûden.
              </Typography>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen}>
            <img src="/images/doc.png" alt="Elle" class="c-img" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Doc Badger - Barkhad Abdi (English) and Takayuki Kinba
                (Japanese)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                The first person to show Elle any kindness on the streets of Los
                Angeles, Doc Badger runs a pawn shop but has more than a few
                shady side-hustles. Barkhad Abdi, who played Doc Badger in Blade
                Runner 2049, plays the role once more in the English version of
                Blade Runner: Black Lotus. In the Japanese Blade Runner cast,
                Doc Badger is voiced by Takayuki Kinba, who previously voiced
                various characters in Tiger & Dragon.
              </Typography>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen}>
            <img src="/images/joseph.png" alt="Elle" class="c-img" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Joseph - Will Yun Lee (English) and Shinshu Fuji (Japanese)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                A mystery man who runs a junk yard, Joseph also tries to help
                Elle uncover the secrets of her past. In the English Blade
                Runner cast, Joseph is played by Will Yun Lee, who is best known
                for playing Dr. Alex Park in The Good Doctor, Sang Min in Hawaii
                Five-0, and protagonist Kovacs in Altered Carbon. In the
                Japanese Blade Runner cast, Joseph is played by Shinshu Fuji,
                who is best known for playing Percival Gibbons in anime Lupin
                the Third and Risotto Nero in JoJo's Bizarre Adventure.
              </Typography>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen}>
            <img src="/images/alani.png" alt="Elle" class="c-img" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Alani Davis - Samira Wiley (English) and Takako Honda (Japanese)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Alani Davis is a rookie detective, new to Los Angeles, but more
                than capable of handling herself. In the English Blade Runner
                cast, Alani is voiced by Samira Wiley, who is best known as
                Poussey Washington in Orange Is the New Black and Moira Strand
                in The Handmaid's Tale. In the Japanese Blade Runner cast,
                Alani's voice is provided by Takako Honda, who is most famous
                for voicing Touko Aozaki in The Garden of Sinners franchise and
                Anko Mitarashi in Naruto.
              </Typography>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen}>
            <img src="/images/senator.png" alt="Elle" class="c-img" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Senator Bannister - Gregg Henry (English) and Masane Tsukayama
                (Japanese)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                A notable politician with strong positions on replicant
                reproduction, Senator Bannister is one of the few familiar faces
                in Elle's fragmented memories. In the English Blade Runner cast,
                Senator Bannister is played by veteran actor Gregg Henry, who
                was most recently seen as Martin Wexler in the Netflix
                action-thriller show Hit & Run. In the Japanese Blade Runner
                cast, Senator Bannister is voiced by Masane Tsukayama, who is
                perhaps best known for voicing Guile in Street Fighter II: The
                Animated Movie.
              </Typography>
            </Box>
          </Modal>
        </div>

        <div>
          <Button onClick={handleOpen}>
            <img src="/images/niander.png" alt="Elle" class="c-img" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title " variant="h6" component="h2">
                Niander Wallace, Sr. - Brian Cox (English) and Takaya Hashi
                (Japanese)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                The founder and CEO of the Wallace Corporation, Niander Wallace,
                Sr. is ruthless even by the standards of businessmen in the
                world of Blade Runner. Brian Cox, who famously played William
                Stryker in X2: X-Men United and is currently known as Logan Roy
                in Succession, plays the elder Wallace in the English Blade
                Runner cast. He is voiced by Takaya Hashi, best known as Toki in
                Fist of the North Star, in the Japanese Blade Runner cast.
              </Typography>
            </Box>
          </Modal>
        </div>

        <div id="last">
          <Button onClick={handleOpen}>
            <img src="/images/nianderjs.png" alt="Elle" class="c-img" />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Niander Wallace, Jr. - Wes Bentley (English) and Takehito Koyasu
                (Japanese)
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                While he will go on to become the villain of Blade Runner 2049,
                in 2033 Niander Wallace, Jr. is a brilliant young scientist with
                dreams his father cannot grasp. Wes Bentley, best known for,
                among other roles, playing Seneca Crane in The Hunger Games,
                lends his voice to Niander Wallace, Jr. in the English Blade
                Runner cast. In the Japanese Blade Runner cast, Niander Wallace,
                Jr. is voiced by Takehito Koyasu, who is best known as the voice
                of Dio Brando in JoJo's Bizarre Adventure.
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Characters;
