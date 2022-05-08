// GitHub: @AleGV258

class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else{
            if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
                return explorer;
            }else{
                if(explorer.score%5 === 0){
                    explorer.trick = "BUZZ";
                    return explorer;
                }else{
                    explorer.trick = explorer.score;
                    return explorer;
                }
            }
        }
    }
    static applyValidationInNumber(number){
        let fizzbuzz = "";
        if(number%5 === 0 && number%3 === 0){
            fizzbuzz = "FIZZBUZZ";
            return fizzbuzz;
        }else{
            if(number%3 === 0){
                fizzbuzz = "FIZZ";
                return fizzbuzz;
            }else{
                if(number%5 === 0){
                    fizzbuzz = "BUZZ";
                    return fizzbuzz;
                }else{
                    fizzbuzz = number;
                    return fizzbuzz;
                }
            }
        }
    }
}

module.exports = FizzbuzzService;