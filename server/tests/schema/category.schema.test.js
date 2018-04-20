import { expect } from 'chai';
import Category from '../../schemas/types/category.type';

describe('Category', () => {
  // because Category is an enum type we use getValues
  // destructure category.getValues() array
  // P.S This is awesome 😎
  const [food,
    transport,
    entertainment,
    travel,
    healthcare,
    utilities,
    miscellaneous,
  ] = Category.getValues();

  it('should have the food field in the enum type', () => {
    expect(food).to.have.property('name');
    expect(food).to.have.property('value');
    expect(food.name).to.equal('FOOD');
    expect(food.value).to.equal('FOOD');
  });

  it('should have the transport field in the enum type', () => {
    expect(transport).to.have.property('name');
    expect(transport).to.have.property('value');
    expect(transport.name).to.equal('TRANSPORT');
    expect(transport.value).to.equal('TRANSPORT');
  });

  it('should have the entertainment field in the enum type', () => {
    expect(entertainment).to.have.property('name');
    expect(entertainment).to.have.property('value');
    expect(entertainment.name).to.equal('ENTERTAINMENT');
    expect(entertainment.value).to.equal('ENTERTAINMENT');
  });

  it('should have the entertainment field in the enum type', () => {
    expect(travel).to.have.property('name');
    expect(travel).to.have.property('value');
    expect(travel.name).to.equal('TRAVEL');
    expect(travel.value).to.equal('TRAVEL');
  });

  it('should have the healthcare field in the enum type', () => {
    expect(healthcare).to.have.property('name');
    expect(healthcare).to.have.property('value');
    expect(healthcare.name).to.equal('HEALTHCARE');
    expect(healthcare.value).to.equal('HEALTHCARE');
  });

  it('should have the utilities field in the enum type', () => {
    expect(utilities).to.have.property('name');
    expect(utilities).to.have.property('value');
    expect(utilities.name).to.equal('UTILITIES');
    expect(utilities.value).to.equal('UTILITIES');
  });

  it('should have the utilities field in the enum type', () => {
    expect(miscellaneous).to.have.property('name');
    expect(miscellaneous).to.have.property('value');
    expect(miscellaneous.name).to.equal('MISCELLANEOUS');
    expect(miscellaneous.value).to.equal('MISCELLANEOUS');
  });
});
