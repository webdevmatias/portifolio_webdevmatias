import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col md:flex-row items-center justify-center w-full h-auto py-4 bg-[#01161E] text-white">
      <div>
        <p className="text-sm">&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
      </div>
    </footer>
  );
}

export default Footer;
