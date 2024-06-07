
function isPossible(container_limits, shipments,
                 n, m, min_time)
{
    let temp = 0;
    let count = 0;
 
    while (count < m) {
        for (let j = 0; j < min_time
                        && temp < n
                        && shipments[count] >= container_limits [temp];
             j += 2)
            temp++;
 
        count++;
    }
 
   
    if (temp == n)
        return true;
 
   
    return false;
}
 

function minTime(container_limits, shipments, n, m)
{
 
    // Sort the two arrays
    container_limits.sort(function(a,b){return a-b });
    shipments.sort(function(a,b){return a-b });
 
    let l = 0;
    let h = 2 * n;
 
    
    let min_time = 0;
 
    
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
 
        
        if (isPossible(container_limits, shipments, n, m, mid)) {
            min_time = mid;
            h = mid - 1;
        }
        else
            l = mid + 1;
    }
 
    return min_time;
}

let container_limits= [15, 15, 20, 10];
let shipments= [10, 20, 30];
let n = container_limits.length;
let m = shipments.length;
document.write(minTime(container_limits, shipments, n, m));

