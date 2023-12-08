import React, { useState } from "react";

const Refund = () => {
  const [showMore, setShowMore] = useState(false);

  const ScrolltoTop = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-gray-100 mt-4 min-h-screen">
      <div className="w-1/2 bg-white text-start p-8  border-r-2 border-l-2 border-t-2 border-b-2">
        <p className="text-2xl font-primary font-bold text-[#1e2d7d] mb-4">
          Cancellation and Refund
        </p>
        <ul className="font-secondary text-[#677279] pl-4 space-y-5 list-none">
          <li className="text-black/80 text-lg">
            First, we thank you and appreciate your purchase with us.
          </li>
          <li className="text-black/80 text-lg">
            We offer 07 days return and cancellation policy from the date of
            final delivery to you.
          </li>
          <li className="text-black/80 text-lg">
            Kindly Note: We do not give the 07 days return and refund on the
            products that come under
            <span className="text-cyan-500  cursor-pointer font-primary ">
              Seed
            </span>
            and
            <span className="text-cyan-500  cursor-pointer font-primary ">
              Clearance Sale
            </span>
            . Before purchasing the products of these categories, kindly rethink
            again and again as you will not get the return and refund.
          </li>
          <li>
            Please read the policies, terms, and conditions, and process as they
            will give you essential pieces of information and guidelines about
            your rights and obligations as our customer, concerning any purchase
            you make through us unless explicitly stated otherwise on our
            policy.
          </li>
          <li>
            If, due to any reason, unavoidable circumstances, or beyond the
            limitations of the merchants, the order not shipped by the seller,
            then the order shall be canceled and refunded.
          </li>

          <li>
            In the event the order/product is delivered and has been canceled
            due to defective products, delivery of the wrong products, partial
            product, etc. the refund is processed.
          </li>
        </ul>

        {showMore && (
          <>
            <p className="text-2xl mt-5 font-primary font-bold text-[#1e2d7d] mb-4">
              There are the following three stages that you might fall into.
            </p>
            <ul className="list-decimal pl-4 text-[#677279] space-y-5">
              <li>
                <span className="text-black/80 font-secondary">
                  After immediately you placed an order, and before we shipped
                </span>
                , and before we shipped, you may cancel the order without any
                charge. For immediate cancellation, kindly send us an email to
                <span className="text-cyan-500 cursor-pointer font-primary">
                  admin@agritell.com.
                </span>
              </li>
              <li>
                <span className="text-black/80 font-secondary">
                  After shipping the products, the packet is in transit
                </span>
                , if you want to cancel the order, send an email to
                admin@agritell.com first. We will return the packet from courier
                partners such as
                <span className="text-black/80 font-secondary">
                  Delhivery, DTDC and Agritell Shipping
                </span>
                initiate the cancelation process. Once the packet has returned
                to us, we will notify you on the same email that used at the
                time of placing an order, and we will refund the amount
                immediately after deducting the shipping cost to the same
                mode/account through which you made the payment during order
                placement.
              </li>
              <li>
                <span className="text-black font-secondary">
                  After delivered the packet(s) to you, finally,
                </span>
                if you want to cancel, send an email first for cancelation
                request to email on
                <span className="text-cyan-500 cursor-pointer font-primary">
                  admin@agritell.com.
                </span>
                After you get the confirmation email from us, you will send the
                packet(s), as early as possible, through any couriers to our
                below-mentioned warehouse address.
              </li>
              <div className="text-black/70 font-secondary">
                <p>Agritell Private Limited,</p>
                <p>At - Chandipur, PO - Math Chandipur,</p>
                <p>Dist - Purba Medinipur, PIN - 721659,</p>
                <p>State - West Bengal, India.</p>
              </div>
              <p>
                Once the packet has returned to us, we will notify you on the
                same email that used at the time of placing an order, and we
                will refund the amount immediately after deducting the shipping
                cost to the same mode/account through which you made the payment
                during order placement.
              </p>

              <div>
                <h1 className="text-xl font-primary font-bold text-[#1e2d7d] mb-4">
                  The Company, at its sole discretion, may cancel any order(s):
                </h1>
                <ul className="list-disc list-inside space-y-5">
                  <ol>
                    a. if it suspects a customer has undertaken a fraudulent
                    transaction, or
                  </ol>
                  <ol>
                    b. if it suspects a customer has undertaken a transaction
                    which is not in accordance with the Terms of Use, or
                  </ol>
                  <ol>c. in case of unavailability of a product, or</ol>
                  <ol>
                    d. for any reason outside the control of the Company,
                    including causes for delivery related logistical
                    difficulties.
                  </ol>
                  <ol>
                    e. if the Company does not want to do business with the User
                  </ol>
                  <ol>
                    Further, while all measures are taken to ensure accuracy of
                    product specifications and pricing, the details of a product
                    as reflected on the Website may be inaccurate due to
                    technical issues, typographical errors or incorrect product
                    information provided to the Company by a supplier and in
                    such an event you shall be notified as soon as such error
                    comes to the notice of the Company. In such an event, the
                    Company reserves the right to cancel your order and refund
                    any money that may have been paid by you towards the
                    purchase of such products.
                  </ol>
                  <ol>
                    We maintain a negative list of all fraudulent transactions
                    and non-complying users and reserve the right to deny access
                    to such users at any time or cancel any orders placed by
                    them in the future.
                  </ol>
                  <p className="font-primary text-gray-500 mt-5 text-xl">
                    REFUND
                  </p>
                  <ol>
                    Refunds will be issued by the same means of payment as used
                    for the initial transaction. You will not incur any fees as
                    a result of such a return. We will withhold reimbursement
                    until we have received the goods back or you have supplied
                    evidence of having sent back the goods, whichever is the
                    earliest.
                  </ol>
                  <ol>
                    Once we are in receipt of the goods or have received the
                    tracking information of the returned item from you, we will
                    process the refund amount to your bank account, credit card,
                    online wallet, etc. after deducting the shipping charges, if
                    any. We typically issue your refund within 7 to 10 business
                    days of receiving the package from our end.
                  </ol>
                  <ol>
                    If you don't get the refunded amount within 7 days from the
                    date of intimation, kindly let us know again by send an
                    email to
                    <span className="text-cyan-500 cursor-pointer font-primary">
                      admin@agritell.com
                    </span>
                    or call or send a
                    <span className="text-black/80">
                      WhatsApp messages on 8293826607 (from 10 AM - 7 PM).
                    </span>
                  </ol>
                </ul>
              </div>
              <h1 className="text-xl font-primary font-bold text-[#1e2d7d] mb-4">
                EXCHANGE
              </h1>
              <ul className="list-none text-[#677279] space-y-5">
                <li>
                  Currently, we don't have the exchange policy except for the
                  mistake that we made during the product handling for the
                  shipping. So kindly keep in mind that before making a payment
                  and placing an order, recheck all the products again and
                  again.
                </li>
                <li>
                  If we delivered the mismatched, defective, or expired
                  product(s), the same product(s) we will ship that is subject
                  to the availability in our stock.
                </li>
                <li>
                  In that case, first, you will let us know this issue on
                  <span className="text-cyan-500">admin@agritell.com</span> and
                  second, you will ship this product(s) back to us through any
                  couriers to the following address.
                </li>
                <div className="text-black/70 font-primary text-lg">
                  <p>Agritell Private Limited,</p>
                  <p>At - Chandipur, PO - Math Chandipur,</p>
                  <p>Dist - Purba Medinipur, PIN - 721659,</p>
                  <p>State - West Bengal, India.</p>
                </div>
                <li>
                  After getting your email, we will check our stock and let you
                  know the product availability. At this point, you will wait
                  until we received the returned products at our end. After the
                  product received, we will be delivered again within 24 hours
                  if the same item(s) available in our stock. Otherwise, we will
                  refund the purchase price of the same item(s) to the same
                  account from which you made the purchase.
                </li>
                <li>
                  The shipping cost of the returned item(s) you need to pay
                  first. After receiving the products, we will pay back the
                  shipping cost to you to the same mode/account through which
                  you paid, along with the refund amount (if any). The exchange
                  of the product is solely at the discretion of the company.
                </li>
                <li>
                  Finally, if you have any queries, don't hesitate to send an
                  email to{" "}
                  <span className="text-cyan-500">admin@agritell.com</span>. We
                  are here to reply by 24 hours.
                </li>
                <li>a) Your order number</li>
                <li>b) The shipping ID or item number</li>
                <li>c) A brief description of the reason for the return</li>
                <li>
                  d) And tell us whether you are seeking a replacement or a
                  refund.
                </li>

                <li>
                  The buyer has to register the refund/replacement claim within
                  30 days of the receipt of the product. You can raise a
                  complaint by sending an email at
                  <span className="text-cyan-500">admin@agritell.com.</span>
                </li>
                <li>
                  Your request will process within 48 hours, and you will
                  receive an email letting you know your replacement is under
                  process.
                </li>
                <li>
                  If you select a refund, you will be refunded the full cost of
                  the item but the cost of delivery. If the mistake made by us
                  while packing the wrong products, the cost of delivery we are
                  bearing.
                </li>
                <h2 className="text-xl font-primary font-bold text-[#1e2d7d] mb-4">
                  PACKAGING OF ITEMS FOR RETURN
                </h2>
                <li>
                  To return an item, please pack all the products in the
                  original packet and wrap it in such a way that all the packet
                  sides covered.
                </li>
                <li>
                  The shipping label must have the same name, postal address,
                  telephone numbers, as well as your order number, the shipping
                  ID, and item number. We encourage you also to include a brief
                  description of the reason for the return.
                </li>
                <li>
                  The clients will ship the packet on his/her own cost. The User
                  will be bearing the cost of shipping for returning the items.
                </li>
              </ul>
            </ul>
          </>
        )}
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="text-[#1e2d7d] underline mt-4 "
          >
            View Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="text-[#1e2d7d] underline mt-4"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default Refund;
