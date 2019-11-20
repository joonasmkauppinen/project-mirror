/*

    ███████╗██╗   ██╗ █████╗ ██╗     ███╗   ███╗ █████╗ ████████╗██╗  ██╗
    ██╔════╝██║   ██║██╔══██╗██║     ████╗ ████║██╔══██╗╚══██╔══╝██║  ██║
    █████╗  ██║   ██║███████║██║     ██╔████╔██║███████║   ██║   ███████║
    ██╔══╝  ╚██╗ ██╔╝██╔══██║██║     ██║╚██╔╝██║██╔══██║   ██║   ██╔══██║
    ███████╗ ╚████╔╝ ██║  ██║███████╗██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║
    ╚══════╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝                                                                     
                                        
    ███ © 2019 Team Alpha ███████████████████████████████████████████████
                                          
*/

import { create, all } from '../../node_modules/mathjs';

const math = create(all);
const mathEval = math.evaluate;

const evalMath = evaulationString => {
  const result = mathEval(evaulationString);
  return result;
};

export { evalMath };
