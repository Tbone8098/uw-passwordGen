// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    var passLen = prompt("how long do you want your password");

    if (parseInt(passLen) < 8) {
        alert("Password must be 8 or more characters");
        return "";
    } else if (parseInt(passLen) > 255) {
        alert("Password must be less than 255 characters");
        return "";
    } else if (passLen == null) {
        return "";
    }

    passLen = parseInt(passLen);

    var useLowerCase = confirm("do you want LowerCase");
    var useUpperCase = confirm("do you want UpperCase");
    var useNumeric = confirm("do you want Numeric values");
    var useSpecialChar = confirm("do you want Special characters");

    var userPass = "";

    var alpha = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "x",
    ];

    var numericVals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
    var letterChoice = [
        "useLowerCase",
        "useUpperCase",
        "useNumeric",
        "useSpecialChar",
    ];

    var letterChoiceDict = {
        useLowerCase: {
            label: "useLowerCase",
            want: useLowerCase,
            list: alpha,
        },
        useUpperCase: {
            label: "useUpperCase",
            want: useUpperCase,
            list: alpha,
        },
        useNumeric: {
            label: "useNumeric",
            want: useNumeric,
            list: numericVals,
        },
        useSpecialChar: {
            label: "useSpecialChar",
            want: useSpecialChar,
            list: specialChars,
        },
    };

    for (var i = 0; i < passLen; i++) {
        // TODO: wrap this is a while loop and break when letterChoice is true
        let getTrue = true;
        while (getTrue) {
            // get random number to choice which letter choice
            let currentLetterChoice = Math.floor(Math.random() * 4);
            tempLetterChoice = letterChoice[currentLetterChoice];

            let chosenList = letterChoiceDict[tempLetterChoice];
            console.log(chosenList);

            if (chosenList.want === true) {
                getTrue = false;

                // get random number based on length of the letterchoice component
                itemCountInList = chosenList["list"].length;
                listRanNum = Math.floor(Math.random() * itemCountInList);
                itemInList = chosenList["list"][listRanNum];

                if (chosenList["label"] === "useUpperCase") {
                    itemInList = itemInList.toUpperCase();
                }

                userPass += itemInList;
            }
        }
    }
    return userPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*

pseudo code

length: 8 - 128
character types: lowercase, uppercase numeric, special characters
*/
