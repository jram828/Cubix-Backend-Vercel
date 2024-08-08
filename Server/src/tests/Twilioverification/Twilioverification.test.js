import {server} from "../../../server.js";
import session from "supertest"


const agent = session(server);

console.log("Agent:", agent.post);


describe("Routes test:", () => {
  describe("Verify user with Twilio", () => {
    it("POST /sendOTP/:phoneNumber. Should send succesfully the OTP to the received phone number and respond with 'pending' ", async () => {

const response = await agent
  .post("/verifyuser/sendOTP/+573204746006");
      // console.log("response:", response);

      expect(JSON.parse(response.text)).toBe("pending");
    });


    it("If there is an error in the phone number it responds with status: 400", async () => {
      const response = await agent.post("/verifyuser/sendOTP/+573204746006");
      expect(response.status).toBe(400);
    });

    it('POST /sendOTP/:phoneNumber.If there is an error it returns an object with properties: "status", "code", "moreInfo"', async () => {
      const response = await agent.post("/verifyuser/sendOTP/+573204746006");
      //  console.log('response:', response)
      expect(response).toHaveProperty("status" && "code" && "moreInfo");
    });

        xit("POST /verifyOTP. Should respond with 'approved' ", async () => {
          const response = await agent.post("/verifyuser/verifyOTP").send({phoneNumber:"+573204746006", OTP: "955694"});

          expect(JSON.parse(response.text)).toBe("approved");
        });
    
        it('POST /verifyuser/verifyOTP. If the OTP is not correct, it it returns an object with properties: "status", "code", "moreInfo"', async () => {
          const response = await agent
            .post("/verifyuser/verifyOTP")
            .send({ phoneNumber: "+573204746006", OTP: "498599" });
         console.log("response:", response);

          expect(response.statusCode).toBe(200);
          expect(JSON.parse(response.text)).toBe("pending");
        });
    
            it('If the OTP is not correct, it it returns an object with properties: "status", "code", "moreInfo"', async () => {
              const response = await agent
                .post("/verifyuser/verifyOTP")
                .send({ phoneNumber: "+573204746060", OTP: "498575" });
              // console.log("response:", response);

              expect(response.status).toBe(200);
              expect(JSON.parse(response.text).status).toBe(404);
            });
  });
});
