import moment from "moment";

class UtilityFunctions {
  // Use unix time stamp to generate unique names
  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  uniqueSpaceName = "Space #" + this.getUnixTimeStamp();

  uniqueFolderName = "Folder #" + this.getUnixTimeStamp();

  uniqueItemName = "Item #" + this.getUnixTimeStamp();
}

export default new UtilityFunctions();
