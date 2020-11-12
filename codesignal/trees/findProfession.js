/**

Consider a special family of Engineers and Doctors. This family has the following rules:

Everybody has two children.
The first child of an Engineer is an Engineer and the second child is a Doctor.
The first child of a Doctor is a Doctor and the second child is an Engineer.
All generations of Doctors and Engineers start with an Engineer.

11/11/2020
 */


function findProfession(level, pos) {

  if (level === 1) {
    return 'Engineer';
  } else if (level === 2) {
    if (pos === 1) {
      return 'Engineer';
    } else {
      return 'Doctor';
    }
  }
  if (pos % 2 === 1) {
    return findProfession(level - 1, (pos + 1) / 2)
  } else {
    if (findProfession(level - 1, pos / 2) === 'Doctor') {
      return 'Engineer';
    } else {
      return 'Doctor';
    }
  }
}