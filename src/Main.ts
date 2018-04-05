import ArrayUtil from './utils/ArrayUtil';
import BezierUtil from './utils/BezierUtil';
import Cursor from './utils/Cursor';
import MathUtil from './utils/MathUtil';
import Pool from './utils/Pool';
import range from './utils/range';
import StringUtil from './utils/StringUtil';
import classNames from './utils/classNames';
/**
 * @author kozakluke@gmail.com
 */
class Main
{
    constructor()
    {
        //console.log(ArrayUtil.shuffle<number>([1, 2, 3]));
        //console.log(BezierUtil.pointOnQuadCurve(1, 1, 2, 3, 4, 5, 0.5, {}));
        //console.log(Cursor);
        //console.log(MathUtil);
        //console.log(Pool);
        //console.log(StringUtil.pad2(2));
        //console.log(classNames('a', 'b', 'c'));
        
        
        //console.log(range(0, 10, 2));
        
        const dates:Date[] = [];
        dates[0] = Pool.get(Date);
        dates[1] = Pool.get(Date);
        
        //Pool.free(Date, dates[0], dates[1]);
        //Pool.free(Date, ...dates)
        Pool.freeArray(Date, dates);
        
        
        console.log(Pool.getPool(Date));
        //console.log(ArrayUtil.removeNull<number>([,,,1,,2,,3]));
        //console.log(ArrayUtil.removeNull<number>([, ,,,'b', ,'c',,,,'z']));
        
        //console.log(date1, date2);
    }
}

new Main();
