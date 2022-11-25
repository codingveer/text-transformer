import addDays from '../utility/getUpcomingDay.js';

const getWhichDay = (inputText) => {
 if(!inputText?.length) return
  var result = inputText?.match(/(Today|tomorrow|Yesterday)/gi);
  if(!result){
    return
  }
  const transformedText = inputText?.replace(/(Today|tomorrow|Yesterday)/gi,'');
  const convertedDate = addDays(result[0].toLowerCase());
   const date = {
        date: convertedDate
    };
   const response = {
      transformedText,
      features:{...date}
    }
  return response
}

export default getWhichDay;