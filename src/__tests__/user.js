import loadUser from "../loadUser";
import { httpGet } from "../http";
jest.mock("../http");

beforeEach(() => {
   jest.resetAllMocks();
})
test("schould call loadUser once", () => {
   httpGet.mockReturnValue(JSON.stringify({}));
   loadUser(1);
   expect(httpGet).toBeCalledWith("http://server:8080/users/1")
});

//mock