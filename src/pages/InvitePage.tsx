import React, { useState, useRef, useEffect } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import inviteImage from "../static/images/invite.png";
import Snackbar from "@mui/material/Snackbar";
import ClipboardJS from "clipboard";
import { RewardList, FrenList } from "../components";
import { shareURL } from "@telegram-apps/sdk-react";

export const InvitePage: React.FC = () => {
  const inviteLink = "wubywan 123";
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const clipboardRef = useRef<ClipboardJS>();

  const inviteOnclick = () => {
    shareURL("https://t.me/open_torch_wxy_bot/ufoapp", inviteLink);
  };
  useEffect(() => {
    if (buttonRef.current) {
      clipboardRef.current = new ClipboardJS(buttonRef.current, {
        text: () => inviteLink,
      });

      clipboardRef.current.on("success", (event) => {
        setOpen(true); // 打开 Snackbar 提示
        event.clearSelection();
      });

      clipboardRef.current.on("error", () => {
        console.error("Failed to copy.");
      });
    }

    return () => {
      if (clipboardRef.current) {
        clipboardRef.current.destroy();
      }
    };
  }, [inviteLink]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="flex flex-col z-10  bg-slate-800 min-h-screen pb-14">
      <header className="w-full">
        <div className="items-center justify-center">
          <img src={inviteImage} className="w-full h-25" />
        </div>
        <div className="flex mt-2 items-center justify-center">
          <div
            className="text-center text-base text-white font-bold bg-sky-500 rounded-2xl p-3 mr-2 w-4/5"
            onClick={inviteOnclick}
          >
            Invite a fren
          </div>
          <button ref={buttonRef} className="rounded-2xl bg-sky-500 p-3">
            <ContentCopyIcon />
          </button>
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            autoHideDuration={3000}
            onClose={handleClose}
            message="copied"
          />
          {/* </div> */}
        </div>
      </header>
      <main>
        <RewardList />
        <FrenList />
      </main>
    </div>
  );
};
