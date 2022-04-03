import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import tr from "./tr";

const LANG_SELECTION = localStorage.getItem("adplus_lang") || "tr";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		tr: {
			translation: tr,
		},
	},
	lng: LANG_SELECTION,
	fallbackLng: "tr",
	interpolation: {
		escapeValue: false,
	},
});

i18next.on("languageChanged", (lng: string) => {
	localStorage.setItem("adplus_lang", lng);
});

export default i18next;
