
export const todayDate = () => {
     return (new Date()).toUTCString();
     //return (new Date()).toUTCString().split(" ").slice(0,4).join(" ");


}