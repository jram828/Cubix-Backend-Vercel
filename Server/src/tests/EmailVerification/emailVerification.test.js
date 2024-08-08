import { server } from "../../../server.js";
import session from "supertest";

const agent = session(server);

console.log("Agent:", agent.post);

describe("Routes test:", () => {
  describe("Verify user's email", () => {
    it("POST /users/verify-email. Should send succesfully an email to the received email address and respond with 'Email was sent succesfully' ", async () => {
      const response = await agent.post("/users/verify-email", {
        username: "Julian",
        email: "jram828@gmail.com",
        redirectUrl: "https://www.elempleo.com/",
      });
      // console.log("response:", response);

      expect(JSON.parse(response.text)).toBe("pending");
    });

    it("If there is an error in the email address it responds with status: 400", async () => {
      const response = await agent.post("/users/verify-email", {
        username: "Julian",
        email: "jram828gmail.com",
        redirectUrl: "https://www.elempleo.com/",
      });
      expect(response.status).toBe(400);
    });

    it('POST /users/verify-email.If there is an error it returns an object with properties: "status", and "message"', async () => {
      const response = await agent.post("/users/verify-email", {
        username: "Julian",
        email: "jram828gmail.com",
        redirectUrl: "https://www.elempleo.com/",
      });
      //  console.log('response:', response)
      expect(response).toHaveProperty("status" && "message");
    });

        it('POST /users/verify-email.If there is an error with username it returns an object with properties: "status", and "message"', async () => {
          const response = await agent.post("/users/verify-email", {
            username: "Ju",
            email: "jram828@gmail.com",
            redirectUrl: "https://www.elempleo.com/",
          });
          //  console.log('response:', response)
          expect(response).toHaveProperty("status" && "message");
        });
    
            it('POST /users/verify-email.If there is an error with redirect URL it returns an object with properties: "status", and "message"', async () => {
              const response = await agent.post("/users/verify-email", {
                username: "Julian",
                email: "jram828@gmail.com",
                redirectUrl: "elempleo.com/",
              });
              //  console.log('response:', response)
              expect(response).toHaveProperty("status" && "message");
            });

   
  });
});
