import * as React from "react";
import { useRecoilValue } from "recoil";

import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, Modal } from "@mui/material";

import { dailyBible, dailyBibleBackGround } from "@web/utils/states/bible";

interface DailyBibleInterface {
  open: boolean;
  handleClose: (e: Event, reason: string) => void;
}

export default function DailyBibleModal({ open, handleClose }: DailyBibleInterface) {
  const bibleSentence = useRecoilValue(dailyBible);
  const backgroundUrl = useRecoilValue(dailyBibleBackGround);

  return (
    <Modal
      disableAutoFocus
      open={open}
      onClose={handleClose}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        className="modal-background"
        style={{ backgroundImage: `url(${backgroundUrl})`, backgroundRepeat: "no-repeat", maxWidth: "400px" }}>
        <IconButton className="modal-button-close" size="large" onClick={handleClose}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <div className="modal-daily-bible">
          <div className="sentence">{bibleSentence?.sentence}</div>
          <div className="sentence-detail">
            ({bibleSentence?.bookAbbreviation} {bibleSentence?.chapterSequence},{bibleSentence?.sequence})
          </div>
        </div>
        <div className="modal-btn-share">
          <Button
            variant="contained"
            sx={{
              borderRadius: "40px",
              width: "100%",
              background: "linear-gradient(90deg, #0762C8 0%, #00C2E4 100%)",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
              height: "56px",
              padding: "20px 50px",
            }}
            size="large">
            Chia sẻ
          </Button>
        </div>
      </div>
    </Modal>
  );
}
