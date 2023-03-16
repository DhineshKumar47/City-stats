/*‘Chennai’: population = 4646732
           literacyRate = 90.20
           language = ‘Tamil’

‘Bengaluru’ :population = 8443675
             literacyRate = 88.71
             language = 'Kannada'

‘Mumbai’ :population = 12442373
          literacyRate = 89.73
          language = 'Marathi'’

‘Delhi’: population = 16787941
         literacyRate = 86.20
         language = 'Hindi'

The indian city Chennai has an a population of 4646732 most of the people speak tamil and has a literacy rate of 90.20 */

const button = document.querySelector('button')
button.addEventListener('click',displayStats)
function displayStats(){
    const input = document.getElementById("input")
    const city = input.options[input.selectedIndex].value 
    //console.log(city)
    let population = 0, literacyRate = 0, language = ''
   switch(city){
           case 'bengaluru':
               population = 8443675
               literacyRate = 88.71
               language = 'Kannada'
               break;

             case 'chennai':
                population = 4646732
                literacyRate = 90.20
                language = 'Tamil'
                break;

            case 'delhi':
                population = 16787941
                literacyRate = 86.20
                language = 'Hindi'
                break;

            case 'kerala':
                population = 12442373
                literacyRate = 89.73
                language = 'Malayalam'
                break;
    }
    let text = `The indian city of ${city} has an a population of ${population} most of the people speak ${language} language and has a literacy rate of ${literacyRate}%`
    let resultdiv = document.createElement('div')
    resultdiv.id =  'result'
    document.getElementById('wrapper').appendChild(resultdiv)
    document.getElementById('result').innerHTML = text
}
