import axios from 'axios'
import './Payment.css'
const Payment = () => {
    
    async function handlePay() {
        const API = "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RjNU1EVXdMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkueFBuTmZRSUl6cXBQNHFlcVdQMjltWlZRQ1VkMjNBa3RLNlpZdThvTkx0akFYSkU5VzVIUkF5WkZFMGkyTUxLZFluZE9nYVhTb0JsWU5LWUtPemFDcVE=";
        let data = {
            "api_key": API
        };

        try {
            let response = await axios.post('https://accept.paymob.com/api/auth/tokens', data, {
                headers: { 'Content-Type': 'application/json' }
            });
            let token = response.data.token;
            console.log(token);
            secondStep(token);
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }

    async function secondStep(token) {
        let data = {
            "auth_token": token,
            "delivery_needed": "false",
            "amount_cents": "100000",
            "currency": "EGP",
            "items": [],
        };

        try {
            let response = await axios.post('https://accept.paymob.com/api/ecommerce/orders', data, {
                headers: { 'Content-Type': 'application/json' }
            });

            let id = response.data.id;
            console.log(id);
            thirdStep(token, id);
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }

    async function thirdStep(token, id) {
        let data = {
            "auth_token": token,
            "amount_cents": "100000",
            "expiration": 3600,
            "order_id": id,
            "billing_data": {
                "apartment": "803",
                "email": "claudette09@exa.com",
                "floor": "42",
                "first_name": "Clifford",
                "street": "Ethan Land",
                "building": "8028",
                "phone_number": "+86(8)9135210487",
                "shipping_method": "PKG",
                "postal_code": "01898",
                "city": "Jaskolskiburgh",
                "country": "CR",
                "last_name": "Nicolas",
                "state": "Utah"
            },
            "currency": "EGP",
            "integration_id": 4586649 // Assuming integrationID is defined elsewhere
        };
    
        try {
            let response = await axios.post('https://accept.paymob.com/api/acceptance/payment_keys', data, {
                headers: { 'Content-Type': 'application/json' }
            });
    
            let TheToken = response.data.token;
            cardPayment(TheToken);
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }

    async function cardPayment (token) {
        try{
            let iframURL = `https://accept.paymob.com/api/acceptance/iframes/849339?payment_token=${token}`
            window.location.href = iframURL;
        } catch(error){
            console.error(error)
        }
       
    }

    // ====================================================================================================

    return (
        <>
            <div className="paymentComponent">
                <div>
                    <label htmlFor="Amount">Amount</label>
                    <input id="Amount" type="text" value={10} name='Amount' />
                </div>
                <div>
                    <button onClick={handlePay}>Pay</button>
                </div>
            </div>
        </>
    );
}

export default Payment;