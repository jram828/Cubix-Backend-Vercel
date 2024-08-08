import MockAxios from "jest-mock-axios";
import { registerUser } from "../../controllers/createUser.js";
import { envs } from "../../config/enviroments/enviroments.js";
describe("registerUser", () => {
  afterEach(() => {
    MockAxios.reset();
  });

  it("Should create user successfully in Habanero", async () => {
    const userData = {
      username: "testuser",
      password: "password123",
      firstName: "Test",
      lastName: "User",
    };

    const payload = {
      BrandId: envs.BRANDID,
      APIKey: envs.APIKEY,
      Username: userData.username,
      Password: userData.password,
      CurrencyCode: "EUR",
    };

    const mockResponse = {
      data: {
        Authenticated: true,
        Token: "pf-9230709c4d7987f48d14d1797ff92a4ff0ae942olvknq",
        PlayerCreated: false,
        PlayerId: "4f396191-a14a-ef11-991c-002248ec05ac",
        BrandId: "c9eb1502-703e-ef11-991a-002248eb2b00",
        BrandName: "Cubix Casino & Bets",
        CurrencyCode: "EUR",
        CurrencySymbol: "€",
        RealBalance: 0,
        BonusBalance: 0,
        PointBalance: 0,
        BonusGameId: 0,
        BonusPercentage: 0,
        BonusSpins: 0,
        BonusWagerRemaining: 0,
        HasBonus: false,
      },
    };

    MockAxios.post.mockResolvedValue(mockResponse);

    const result = await registerUser(userData.username, userData.password);

    expect(result).toEqual({
      success: true,
      message: "User created correctly in Habanero",
      habaneroData: mockResponse.data,
    });

    expect(MockAxios.post).toHaveBeenCalledWith(
      `${envs.HABANERO_API_URL}/LoginOrCreatePlayer`,
      payload
    );
  });
});