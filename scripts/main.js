import { getCriminals } from "./criminals/criminalsDataProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";

getCriminals().then(() => CriminalList())