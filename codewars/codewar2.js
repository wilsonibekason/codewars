 // just like in a facebook post or a professional social media post, write an algorithnm to render and correctly display the total number of people that liked your post

 // expected output 
 // [] = no one likes this 
 // ['wilson'] =  wilson likes this 
 // ['wilson', 'james']  =   wilson and james likes this
 // ['wilson', 'james', 'alexander'] = wilson, james and alexander like this 
 // ['wilson',  'james', 'alexander', 'david']  =  wilson, james and 2 others like this

 // next time i will be adding links for you to 
 // solution1

  const likes = (names) => {
    let names = names || [];
    switch(names.length) {
        case 0:
            return 'no one likes this'
        case 1:
            return `${names[0]} likes this `
        case 2: 
            return `${names[0]} and  ${names[1]} likes this`;
        case 3:
            return `${names[0]}, ${names[2]} and ${names[2]} like this`;
        case 4:
            return `${names[0]}, ${names[1]} and ${names.length - 2} like this`;
    }
  }

  const returnNameCount = likes(['wilson',  'james', 'alexander', 'david']);
  console.log(returnNameCount);

  // second solution

  const names1 = ['wilson',  'james', 'alexander', 'david'];
    const formatter = new  Intl.ListFormat('en-GRM', {
        style: 'short',
        type: 'conjunction',
    })
  const likes1 = (names) => {
       let names1 = names || [];
       switch(names1.length){
        case 0:
            return 'no one likes this';
        case 1:
            return `${names1[0]} likes this`;
        case 2:
            return `${formatter.format(names1)} likes this`;
        case 3:
            return `${formatter.format(names1)} like this`;
        case 4:
            return `${formatter.format(names1)} like this`;
       }
  }

  console.log(likes1(names1))