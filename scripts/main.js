import { getCriminals } from "./criminals/criminalsDataProvider.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";

getCriminals().then(() => CriminalList())

getConvictions().then(() => ConvictionSelect() )