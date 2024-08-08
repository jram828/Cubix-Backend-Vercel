import supertest from 'supertest'
import { server } from '../../../server.js'

const api = supertest(server)

describe('POST /users/recovery-password', () => {
  beforeAll(async() => {
    await api
      .post('/users/recovery-password')
      .send({
        Username: 'userExampleTest',
        NewPassword: 'ValidPassword1!',
        phoneNumber : "12345678911"
    })
  })
  
  it('should change the password when send correct data', async () => {

    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'userExampleTest',
        NewPassword: 'ValidPassword2!',
        phoneNumber : "12345678911"
    })
    console.log(response);
    expect(response.status).toBe(200)
    expect(response.body.Success).toBe(true)
    expect(response.body.Message).toBe("Password updated!")
  })

  it('should change the password when send correct data but send the same password', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'userExampleTest',
        NewPassword: 'ValidPassword2!',
        phoneNumber : "12345678911"
    })

    expect(response.status).toBe(200)
    expect(response.body.Success).toBe(true)
    expect(response.body.Message).toBe("Password has not changed.")
  })

  it('should return an error when the username is empty', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: '',
        NewPassword: 'ValidPassword2!',
        phoneNumber : "12345678911"
    })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Username must be at least 3 characters long')
  })

  it('should return an error when the new password is empty', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'userExampleTest',
        NewPassword: '',
        phoneNumber : "12345678911"
    })

    expect(response.status).toBe(500)
    expect(response.body.error).toContain('NewPassword must be at least 8 characters long')
  })

  it('should return an error when the username and new password are empty', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: '',
        NewPassword: '',
        phoneNumber : "12345678911"
    })

    expect(response.status).toBe(500)
    expect(response.body.error).toContain("Username must be at least 3 characters long, NewPassword must be at least 8 characters long")
  })

  it('should return an error when the new password does not meet the requirements', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'userExampleTest',
        NewPassword: 'invalid',
        phoneNumber : "12345678911"
    })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe("NewPassword must be at least 8 characters long, Password must have at least one uppercase letter, Password must have at least one number, Password must have at least one special character(@, $, !, %, *, ?, &)")
  })

  it('should return an error when the username does not exist', async () => {
    const response = await api
      .post('/users/recovery-password')
      .send({
        Username: 'unknowUser',
        NewPassword: 'ValidPassword2!',
        phoneNumber : "12345678911"
    })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe("Player 'unknowUser' not found.")
  })

  it('should return an error when username is a number', async () => {
    const response = await api
        .post('/users/recovery-password')
        .send({
          Username: 123456,
          NewPassword: 'ValidPassword2!',
          phoneNumber : "12345678911"
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Username must be a string')
})

  it('should return an error when new password is a number', async () => {
      const response = await api
          .post('/users/recovery-password')
          .send({
            Username: 'userExampleTest',
            NewPassword: 2312312,
            phoneNumber : "12345678911"
        })

      expect(response.status).toBe(500)
      expect(response.body.error).toBe('NewPassword must be a string')
  })

  it('should return an error when username is undefined', async () => {
      const response = await api
          .post('/users/recovery-password')
          .send({
            NewPassword: 'ValidPassword2!',
            phoneNumber : "12345678911"
        })

      expect(response.status).toBe(500)
      expect(response.body.error).toBe('Username is required')
  })

  it('should return an error when new password is undefined', async () => {
      const response = await api
          .post('/users/recovery-password')
          .send({
            Username: 'userExampleTest',
            phoneNumber : "12345678911"
        })

      expect(response.status).toBe(500)
      expect(response.body.error).toBe('NewPassword is required')
  })

  it('should return an error when phone number is undefined', async () => {
    const response = await api
        .post('/users/recovery-password')
        .send({
          Username: 'userExampleTest',
          NewPassword : "ValidPassword2!"
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Phone number is required')
})
})
