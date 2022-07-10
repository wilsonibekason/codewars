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
        case 0:
            return `${names[0]} likes this `
    }
  }