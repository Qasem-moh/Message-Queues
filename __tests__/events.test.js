  
"use strict";
const Events=require('events');
const events=new Events();
describe("Node Module", () => {
  it("events", () => {
    expect(events).toBeInstanceOf(Events);
  });
});