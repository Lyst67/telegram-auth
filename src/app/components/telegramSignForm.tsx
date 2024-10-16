import { buttonStyle } from "../lib/utils/styleTemplates";
// import { getSocialLogIn } from "@/actions/login";
import { BiLogoTelegram } from "react-icons/bi";
import { LoginButton } from "@telegram-auth/react";
import { signIn } from "next-auth/react";

export default function TelegramAccountButton({
  botUsername,
}: {
  botUsername: string;
}) {
  return (
    <div
      // action={getSocialLogIn}
      className="flex gap-5 items-center justify-center"
    >
      <div
        // href={"https://core.telegram.org/widgets/login"}
        // name="action"
        // value="google"
        className={`${buttonStyle} bg-transparent text-main-text px-3 hover:bg-faceblue dark:text-light-text`}
      >
        Log In with Telegram
        <div className="w-9 h-9 rounded-full bg-faceblue grid place-items-center">
          <BiLogoTelegram className="w-7 h-7" />
        </div>
        <LoginButton
          botUsername={botUsername}
          onAuthCallback={(data) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            signIn("telegram-login", { callbackUrl: "/" }, data as any);
          }}
        />
      </div>
    </div>
  );
}
