class UserService {

     getAllClassifieds = () => {
         console.log('inside classified service')
        return new Promise((reject, resolve) => {
            return resolve(
                {
                    "id": 1,
                    "title": "Room rent at new Town",
                    "rent": 2000,
                    "isAvialble": true
                }
            )
        })
    }

}

export const userService =  new UserService();