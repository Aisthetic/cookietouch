import GlobalConfiguration from "@/configurations/GlobalConfiguration";
import { Languages } from "@/configurations/language/Languages";
import Dictionary from "@/utils/Dictionary";
import * as fs from "fs";
import * as path from "path";

export default class LanguageManager {
  public static Init() {
    const enTxt = fs.readFileSync(path.join(__dirname, "./en.json"));
    const en = JSON.parse(enTxt.toString());
    const frTxt = fs.readFileSync(path.join(__dirname, "./fr.json"));
    const fr = JSON.parse(frTxt.toString());
    const deTxt = fs.readFileSync(path.join(__dirname, "./de.json"));
    const de = JSON.parse(deTxt.toString());
    const esTxt = fs.readFileSync(path.join(__dirname, "./es.json"));
    const es = JSON.parse(esTxt.toString());
    const itTxt = fs.readFileSync(path.join(__dirname, "./it.json"));
    const it = JSON.parse(itTxt.toString());
    const ptTxt = fs.readFileSync(path.join(__dirname, "./pt.json"));
    const pt = JSON.parse(ptTxt.toString());

    this.langs = new Dictionary([
      { key: Languages.FRENCH, value: fr },
      { key: Languages.ENGLISH, value: en },
      { key: Languages.DEUTSCH, value: de },
      { key: Languages.ITALIAN, value: it },
      { key: Languages.PORTUGUESE, value: pt },
      { key: Languages.SPANISH, value: es },
    ]);
  }

  public static trans(key: string, ...params: any[]): string {
    const lang = GlobalConfiguration.lang;
    let value = this.langs.getValue(lang)[key] as string;
    if (!value) {
      value = this.langs.getValue(Languages.ENGLISH)[key] as string;
      if (!value) { return ""; }
    }
    if (params.length === 0) {
      return value;
    } else {
      for (const param of params) {
        value = value.replace("?", param);
      }
      return value;
    }
  }

  private static langs: Dictionary<Languages, any>;
}
