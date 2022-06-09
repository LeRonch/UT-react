
const FlightService = {
    list(){
      return {
        "arrivalDatetime": "2018-06-15T21:00:00",
        "departure": "DUB",
        "departureDatetime": "2018-06-15T17:25:00",
        "destination": "WRO",
        "flightNumber": "FR153",
      }
    }
  };
  
  describe('FlightService', () => {
      it('Should return a list of flights', () => {
          expect(FlightService.list()).toEqual({
            "arrivalDatetime": "2018-06-15T21:00:00",
            "departure": "DUB",
            "departureDatetime": "2018-06-15T17:25:00",
            "destination": "WRO",
            "flightNumber": "FR153",
          })
      });
  });
  
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };
  
  describe('User', () => {
      it('will fail every time', () => {
        expect(user).toMatchSnapshot();
      });

  });
  
  const user_2 = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };
  
  describe('User2', () => {
      it('will check the matchers and pass', () => {
        expect(user_2).toMatchSnapshot({
            createdAt: expect.any(Date),
            id: expect.any(Number),
        });
      });
  });
  
  const user_3 = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: Math.random().toString(36).substring(7),
  };
  
  describe('User3', () => {
      it('will check the matchers and pass', () => {
        expect(user_3).toMatchSnapshot(
            {
                createdAt: expect.any(Date),
                id: expect.any(Number),
                name: expect.any(String),
            }
          )
      });
  });