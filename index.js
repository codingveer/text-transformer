import TransformationFilters from './components/TransformationFilters.js'

class TextTransform extends TransformationFilters {
  constructor(args) {
    super(args)
    this.inputText = args;
  }

  
  tranform() {
    this.getHashTags(); 
    this.getPriority();
    this.getDateFromStr();
    this.getWhichDay();
    this.getNumberOfDays();
  }
}


const testData1 = "Grammys birthday 15.02.1940";
const testData2 = "Remind me to buy shoes in two days";
const testData3 = "Buy some coffee tomorrow";
const testData4 = "Soccer game won yesterday";
const testData5 = "Let's do a vacation #yay";
const testData6 = "Buy cheese !p1";
const testData7 = "!p2 Buy sausages";
const testData8 = "Buy some #ilikecheese cheese tomorrow !p1";

const inputText = new TextTransform(testData8);
inputText.tranform()
console.log(JSON.stringify(inputText.transformedData), 'Result of transformed text')



