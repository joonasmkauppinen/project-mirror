/*

    ███████╗██╗   ██╗ █████╗ ██╗     ███╗   ███╗ █████╗ ████████╗██╗  ██╗
    ██╔════╝██║   ██║██╔══██╗██║     ████╗ ████║██╔══██╗╚══██╔══╝██║  ██║
    █████╗  ██║   ██║███████║██║     ██╔████╔██║███████║   ██║   ███████║
    ██╔══╝  ╚██╗ ██╔╝██╔══██║██║     ██║╚██╔╝██║██╔══██║   ██║   ██╔══██║
    ███████╗ ╚████╔╝ ██║  ██║███████╗██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║
    ╚══════╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝                                                                     
                                        
    ███ © 2019 Team Alpha ███████████████████████████████████████████████
                                          
    Perform Mathematical Evalauations (Calculations) or Logical Condition 
    Checks helper module. Currently uses MATH.JS for calculations.

*/

import { create, all } from '../../node_modules/mathjs';

const math = create(all);
const mathEval = math.evaluate;

const evalMath = evaulationString => {
  const result = mathEval(evaulationString);
  return result;
};

export { evalMath };
