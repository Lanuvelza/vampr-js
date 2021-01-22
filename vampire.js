class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length; 

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let vampires = 0; 
    let currentVampire = this; 

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      vampires++;
    }

    return vampires;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal; 

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    //   if (!this.creator) {
  //     return this;
  //   } else if ( this.name === vampire.name) {
  //     return this;
  //   } else if (this.creator.name === vampire.creator.name) {
  //     return this.creator;
  //   } else if (this.isMoreSeniorThan(vampire) && this.creator) {
  //     this = this.creator
  //     this.closestCommonAncestor(vampire)
  //   } else if (vampire.isMoreSeniorThan(this)) {
  //     return vampire;
  //   } 

  }
}

module.exports = Vampire;

