import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DocumentsRequired from "./DocumentsRequired";
import FaqAccordion from "../../FaqAccordion";

import FAQImage from '../../../static/images/faq.webp'
import MapPointerImg from '../../../static/images/map-pointer.webp';
import { Helmet } from "react-helmet";
function TermsConditions(){
    
    return(
        <div>
            <Helmet>
                <title>Emi Ride Rent a Car Dubai - Terms and Conditions</title>
                <meta name="description" content="Terms and conditions for rent your car on dubai with us, meet our mileage policy, fuel policy and more" />
            </Helmet>
            <Header/>
            <div className="about-us-container">
                <p className="about-us-tittle pt-4">TERMS AND CONDITIONS</p>
            <div className="about-us-text mx-4">
    
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>MANDATORY DOCUMENTATION AND MINIMUM AGE REQUIRED</strong>
                </p>

                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    The documents listed below are mandatory to rent a vehicle at E M I Ride Rent a car.

                    <br/><p><b>1.</b>  Valid Passport/Visa (for tourist), ID (for residents).</p>
                    <br/><p><b>2.</b>  Valid UAE driver’s license (for residents).</p>
                    <br/><p><b>3.</b>  Valid driver’s license from the home country, for clients with a tourist visa from the countries listed below, with a minimum validity of one year from issue.</p>

                    <br/><p>Albania, Estonia, Italy, Oman, South Africa, Australia, Finland, Japan, Poland, South Korea, Austria, France, Kuwait, Portugal, Spain, Bahrain, Germany, Latvia, Qatar, Sweden, Belgium, Greece, Lithuania, Romania, Switzerland, Bulgaria, Netherlands, Luxembourg, Saudi Arabia, Turkey, Canada, Hong Kong, Malta, Serbia, Ukraine, China, Hungary, Montenegro, Singapore, United Kingdom, Cyprus, Iceland, New Zealand, Slovakia, United States, Denmark, Ireland, Norway, Slovenia.</p>

                    <br/><p><b>1.</b>  Valid international driver’s license/permit (applies to all countries not mentioned in the list of countries) in addition to the driver’s license from the home country with a minimum validity of one year from issued.</p>
                    <br/><p><b>2.</b>  It is mandatory that the credit card is under the hirer’s name in order to block the required security deposit.</p>
                    <br/><p><b>3.</b>  The minimum age to be able to rent a vehicle is at least 21 years of age.</p>
                    <br/><p><b>4.</b>  All the documents mentioned above must be uploaded at the time of doing the reservation on our website, or be sent by email to info@emiride.com or by our WhatsApp customer center at least 24 hours before the reservation in order to can be verified.</p>
                    </span>
                </p>

                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>RETURNS, EXCHANGES, DELIVERIES, AND EXTENSIONS:</strong>
                </p>

                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                        <br/><p><b>1.</b>  The minimum rental period allowed is one day or 24 hours.</p>
                        <br/><p><b>2.</b>  The maximum time allowed as a grace period for drop-off the vehicle is 60 minutes from the expiration of the rental contract. In case of delay in the return of the vehicle and that it exceeds the grace period (60 minutes), E M I Ride Rent a car will be entitled to charge the customer the fee corresponding to an additional 1 day rental at the rate applied, This charge will include the additional add-ons contracted for each day within the reservation.</p>
                        <br/><p><b>3.</b>  The hirer must inform E M I Ride Rent a car at least 12 hours in advance of any required extension of the contract. If the hirer does not return the vehicle on the stipulated delivery date and does not notify E M I Ride Rent a car of any required change or extension,              E M I Ride Rent a car will automatically renew the contract until the hirer returns the vehicle to the agreed place and new charges will be automatically debited from the hirer’s credit card.</p>
                        <br/><p><b>4.</b>  The hirer at the time of accepting the vehicle is confirming that the delivered vehicle is in the conditions indicated in the vehicle verification report that is made at the time of delivery, accepting all responsibility for any additional damage or loss that may occur to the vehicle during the rental period and will remain solely responsible for the vehicle until it is returned and registered by an authorized agent of E M I Ride Rent a car.</p>
                        <br/><p><b>5.</b>  The hirer also undertakes to return the vehicle with all the documents, accessories, spare parts, keys, tools, manuals, etc., in the same conditions in which they were delivered to the place, date and time accorded in the rental agreement. </p>
                        <br/><p><b>6.</b>  E M I Ride Rent a car has the authority to recover the vehicle at the time it determines necessary if the vehicle is used against or violates the rental agreement or if the hirer does not meet its financial obligations.</p>
                        <br/><p><b>7.</b>  If the hirer wishes to return the vehicle in a different place than the agreed one and at a different time than the agreed one, the hirer must contact E M I Ride Rent a car at least 12 hours before the delivery time. Additionally, if the vehicle is in a specific place and at the time of return said place is closed due to its opening or closing hours and this prevents the return of the vehicle, in all cases, the hirer is fully responsible for the vehicle until the place reopens and the vehicle is delivered to E M I Ride Rent a car.</p>
                        <br/><p><b>8.</b>  In the event that the hirer requires to deliver the vehicle in a different place than the agreed one and that this place is outside of Dubai and is in a different Emirate, the client must inform E M I Ride Rent a car at least 24 hours before the pick-up time and the customer will be charged with 300 AED.</p>
                        <br/><p><b>9.</b>  It is possible that the rented vehicle must be changed because it is pending service, maintenance, sale, or repair, among others. In this case, the hirer will be obliged to return the vehicle. E M I Ride Rent a car does not guarantee the return of the same vehicle to the customer, If due to non-compliance with the delivery of the vehicle required by E M I Ride Rent a car and it cannot comply with the required services or maintenance, and in turn this generates damage to the vehicle, this will generate economic obligations to the hirer who will be solely responsible.</p>
                        <br/><p><b>10.</b>  If the vehicle requested by the hirer is not available, E M I Ride Rent is obliged to replace another vehicle of the same category or one of a higher category for temporary use only. Once the vehicle hired by the hirer is available, E M I Ride Rent a car will contact the hirer to make the change of vehicle that was temporarily assigned.</p>
                        <br/><p><b>11.</b>  The early termination of contracts for periods of days, weeks and months will not give rise to any money refund.</p>
                        <br/><p><b>12.</b>  If the hirer does not return the vehicle on the agreed date, and if there is an unpaid balance that cannot be collected from the hirer, or in case the vehicle is used in a way that violates the terms and conditions of the rental agreement, E M I Ride Rent a car reserves the right to:</p>
                        <ul>
                            <li>
                                Report the vehicle as stolen to the Police.
                            </li>
                            <li>
                                Recover the vehicle without prior notice to the hirer.
                            </li>
                        </ul>

                        <br/><p><b>iii.</b> File a case with the police against the hirer for non-payment of the obligations acquired.</p>

                        <br/><p><b>1.</b>  Charge the customer the late payment fee of 3% on unpaid obligations, as well as all charges generated and caused by recovery or damage to the vehicle.</p>
                    </span>
                </p>

                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>CANCELLATION, MODIFICATIONS, FEES AND REFUNDS:</strong>
                </p>

                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    <br/><p><b>1.</b> The rates are subject to change, if changes are made to the reservation after having made the reservation, these will be subject to the availability of vehicles at the time of making any change.</p>
                    <br/><p><b>2.</b> When the hirer wishes to modify the rental period agreed upon at the time of reservation, either because they need to make an extension or reduction of the rental days, the hirer acknowledges that E M I Ride Rent a car reserves the right to modify its rates or reservation in case the availability of vehicles is limited for the rental days that require change.</p>
                    <br/><p><b>3.</b> For daily, weekly and monthly rentals: There will be no refund for unused car rental days once the rental period has started.</p>
                    <br/><p><b>4.</b> E M I Ride Rent a car will apply a fee corresponding to 50% of the value of the reservation for any cancellation of the reservation that occurs within 72 hours prior to the date of the reservation.</p>
                    <br/><p><b>5.</b> Reservation cancellation refunds will be processed to the same credit card used for the reservation within 30 days of the cancellation request date.</p>
                    <br/><p><b>6.</b> All other refunds will be processed within 30 days of the end of the Rental Agreement.</p>
                    <br/><p><b>7.</b> In cases where E M I Ride Rent a car is unable to process the refund due to an invalid or expired credit card, refunds may be claimed within six months from the vehicle return date upon communication with our customer service team.</p>
                    <br/><p><b>8.</b> No refund applies on early return of daily, weekly and monthly rentals.</p>
                    </span>
                </p>

                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>PAYMENT, SECURITY DEPOSIT AND NON-SHOW:</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    <br/><p><b>1.</b> It is mandatory to present a credit card in the name of the hirer for the rental of the vehicle. In the event that it is not provided for the purposes of the security deposit,          E M I Ride Rent a car reserves the right not to rent the vehicle.</p>
                    <br/><p><b>2.</b> Security deposit required of AED 1,000 (kia Pegas, Mitsubichi Attrage, Hyundai Accent and Hyundai Elantra), AED 2,000 (Hyundai Santafe, Nissan Xterra, Toyota Fortuner). This value will be retained by            E M I Ride Rent a car before the hirer receives the vehicle and the unlocking of said amount will be processed within a maximum period of 30 calendar days.</p>
                    <br/><p><b>3.</b> All payments made online with Visa and MasterCard credit/debit cards or other payment method accepted will be processed in AED (Dirham).</p>
                    <br/><p><b>4.</b> E M I Ride Rent a car currently applies a fee corresponding to 100% of the value of the reservation for non-appearance on the day and place agreed within the rental agreement of the reservation.</p>
                    <br/><p><b>5.</b> You can cancel the reservation by calling or texting our customer service team via WhatsApp (+971 503323079).</p>

                    </span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>RESERVATION CHARGES:</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                        <br/><b>1.</b>The quote sent by E M I Ride Rent a car will include the following: all mandatory charges that are required for the reservation, 5% VAT will be applied, or any other additional tax that is applied by government authorities.
                        <br/><b>2.</b>E M I Ride Rent a car reserves the right to modify the terms and conditions set forth in this document, including rates. This modification may be made at any time without prior notice and will take effect once they are published on our website and other service channels.
                        <br/><b>3.</b>Permitted mileage
                        <br/><b>4.</b>Daily rentals (1-6 days).
                        <br/>The daily mileage allowed is 250 KM. Any additional will be charged AED 0.40/KM (kia Pegas y Mitsubichi Attrage), AED 0.44/KM (Hyundai Accent and Hyundai Elantra), AED 0.97/KM (Hyundai Santafe), AED 1.17/KM (Nissan Xterra), AED 1.23/KM (Toyota Fortuner) to hirer.
                    </span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>1. Weekly Rentals (7-20 days).</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>The weekly mileage allowed is 1500KM (for Kia Pegas, Mitsubichi Attrage,  Hyundai Accent and Hyundai Elantra), 1750KM (for Hyundai Santafe, Nissan Xterra, Toyota Fortuner). Any additional will be charged AED 0.40/KM (kia Pegas), AED 0.44/KM (Hyundai Accent), AED 0.97/KM (Hyundai Santafe), AED 1.17/KM (Nissan Xterra), AED 1.23/KM (Toyota Fortuner) to hirer.</span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>2. Monthly Rentals (21 or more days).</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    Allowable monthly mileage is 4000KM (for Kia Pegas, Mitsubichi Attrage, Hyundai Accent and Hyundai Elantra), 4500KM (for Hyundai Santafe, Nissan Xterra, Toyota Fortuner). Any additional will be charged AED 0.40/KM (kia Pegas), AED 0.44/KM (Hyundai Accent), AED 0.97/KM (Hyundai Santafe), AED 1.17/KM (Nissan Xterra), AED 1.23/KM (Toyota Fortuner) to hirer.
                    <br/><b>1.</b>In the event that the hirer incurs or receives a penalty or traffic fines from the police or the Traffic Department (RTA) during the rental period stipulated in the contract,          E M I Ride Rent a car is authorized to debit the cost of said penalties of the hirer’s credit card plus 10% as an internal management fee of the company, which will be the only one authorized to process the payment of said sanctions or fines. 
                    <br/><b>2.</b>The Salik/Darb toll fee will be AED5.00 including VAT and 20% handling fees for each time the vehicle crosses the established tolls gates.
                    <br/><b>3.</b>All fines incurred during the rental period will be the responsibility of the renter. an additional 10% will be charge as handling fee for each traffic violation incurred by the hirer.
                    <br/><b>4.</b>In the event that the traffic offense committed is attributable and the vehicle may be confiscated by the Police, E M I Ride Rent a car will ensure that the fines or penalties are paid to avoid the seizure of the vehicle. All charges or confiscation fees must be paid by the hirer, as well as all additional costs that may be generated 30 days later, it will be automatically processed from the hirer’s credit card without any notification.
                    <br/><b>5.</b>E M I Ride Rent a car will not generate any additional cost for (01 additional driver for each reservation), if 2 or more additional drivers are required within the reservation, the cost for each one will be AED 50.
                    <br/><b>6.</b>E M I Ride Rent a car may apply additional administrative charges if an additional assistance is required such as: copy of the final police report, copies of traffic tickets, release of the vehicle for having been impounded, driving while intoxicated, translation of required documents, etc.
                    <br/><b>7.</b>E M I Ride Rent a car may apply service charges if the vehicle is returned by the hirer in a condition that requires specialized cleaning in the amount of AED 200 for sedans and AED 250 for SUVs.
                    <br/><b>8.</b>E M I Ride Rent a car may apply additional charges for any assistance required for the recovery of the vehicle due to the negligence or default of the hirer.
                    <br/><b>9.</b>The hirer will pay to E M I Ride Rent a car the agreed rates during the term of the rental agreement, in case of renewal or if the hirer cannot return the vehicle at the termination or expiration of the contract agreement, a new rate will be charged according to at the rental rates in effect at that time.
                    <br/><b>10.</b>The hirer authorizes E M I Ride Rent a car to process any additional charges during the rental period such as: traffic fines, salik-darb fees from the toll system, damage or loss, additional costs for non-compliance with the gasoline policy, etc.  of the hirer’s credit card registered in the rental agreement.
                    <br/><b>11.</b>The price of additional services such as (GPS, child seats, CDW-SCDW among others), will be displayed on our website upon request.
                    </span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>CONDITIONS OF RENTAL AND USE OF OUR VEHICLES:</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    E M I Ride Rent a car trusts its customers and therefore expects the renter to take care of the vehicle as if it were their own.
                    <br/>The hirer shall not perform the following actions.

                    <br/><b>1.</b>It is prohibited to transport people, people’s goods or goods for hire.
                    <br/><b>2.</b>It is prohibited to transport a number of passengers greater than the number for which the vehicle is designed.
                    <br/><b>3.</b>It is forbidden to transport any object or substance that, due to its condition or smell, may damage or affect the vehicle, prevent or delay E M I Ride Rent a car from being able to rent it again, which will generate additional charges for the renter in case of presenting it.
                    <br/><b>4.</b>Driving or towing any vehicle or other object is prohibited.
                    <br/><b>5.</b>Participation in any race, contest or illegal activity is prohibited.
                    <br/><b>6.</b>It is forbidden to drive on Dunes or Off-road roads, any damage caused to the vehicle by the use in these types of terrain, the hirer must assume the total repair of the vehicle and additional charges will be generated for the days in which the vehicle stops being used. because of these said damages.
                    <br/><b>7.</b>Driving the vehicle under the influence of alcohol, hallucinogenic drugs, narcotics or any other substance that impairs your consciousness or your ability to drive and react. This applies both to the hirer and to the additional drivers that have been registered within the vehicle rental agreement.
                    <br/><b>8.</b>Violate any traffic law or other applicable regulations.
                    <br/><b>9.</b>It is forbidden to drive the vehicle by a person other than the hirer or by persons other than the additional driver(s) registered in the rental agreement.
                    <br/><b>10.</b>Subleasing the vehicle is prohibited.
                    <br/><b>11.</b>E M I Ride Rent a car rental vehicles can only be driven within the geographical limits of the United Arab Emirates.
                    <br/><b>12.</b>It is prohibited to use the vehicle for informal or illegal transportation services such as transportation of (people, addresses or other service) other than the terms of the rental agreement stipulated by E M I Ride Rent a car.
                    <br/><b>13.</b>E M I Ride Rent a car is not liable to the hirer or any passenger or third party for loss or damage to property left in the vehicle either during the rental period or thereafter. This responsibility is at the expense and risk of the hirer during the term of the rental contract.
                    <br/><b>14.</b>The hirer must ensure that the rented vehicle is always parked in a safe, authorized and protected place and that all doors are locked.
                    <br/><b>15.</b>The hirer will be responsible for the loss of the keys. The minimum charge for lost key will be 1000 AED, these charges may vary depending on the category/brand of the vehicle.
                    <br/><b>16.</b>The hirer agrees to indemnify and hold harmless E M I Ride Rent a car from all damages, losses, costs, legal actions or demands arising from breach by the hirer of the rental agreement made between the parties.
                    </span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>INSURANCE POLICY:</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    E M I Ride Rent a car provides a standard insurance policy for people who use the vehicle with a liability policy.
                    <br/>E M I Ride Rent a car will offer the hirer to opt for a level of insurance with more coverage after paying the applicable rate as agreed with E M I Ride Rent a car at the time of making the reservation on our official website. The hirer must obtain a signed copy of the Terms and Conditions of any additional insurance or in case of having the extended insurance coverage mentioned above and as explained below.
                    <br/>The types of insurance that E M I Ride Rent a car offers its clients are the following:
                    <br/><b>1.</b>Basic insurance is already included in the basic rental rate.
                    <br/><b>2.</b>Collision Damage Waiver (CDW).

                    <br/><b>3.</b>Super Collision Damage Waiver (SCDW)
                    <br/>In the event of an accident involving the rented vehicle and resulting in damage to the vehicle, the insurance company will rely on the result of the police report and the type of additional vehicle insurance used by the hirer at the time of reserving or renting the vehicle.

                        The hirer’s driver’s license or permit must be at least 1 year old in order to use the CDW or SCDW.
                        The renter is responsible for obtaining the corresponding police report for any damage to the vehicle. Full repair fees will be charged to the customer in the absence of a police report.
                        If the hirer is in the age range between 21 and 25 years old, they must pay an additional 10% of the total insurance excess to be paid, that is, if the excess to be paid is AED 1000, the lessee must pay said value plus additional 10% as the insurance company policy required.
                    </span>
                </p>

                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>BASIC INSURANCE</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>total payment of the insurance excess to pay 100% (if the hirer is found guilty or if the r hirer flees the scene of the accident), total payment of the insurance excess to pay 0% (if the hirer is found not guilty).</span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>COLLISION DAMAGE WAIVER (CDW)</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>partial payment of the insurance excess to be paid 50% (if the hirer is found guilty or if the hirer flees the scene of the accident) 0% of the insurance excess to be paid (if the hirer is found not guilty).</span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>SUPER COLLISION DAMAGE WAIVER (SCDW)</strong>
                </p>

                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    total payment of the insurance excess to pay 0% (if the hirer is found guilty or if the hirer flees the scene of the accident), 0% (if the hirer is found not guilty).
                    <br/><b>1.</b>If the hirer fails to comply or does not provide the police report within the established period, the insurance provided under the rental agreement will be null and void and the hirer will be responsible for paying the costs of damages, repairs and/or losses. suffered by E M I Ride Rent a car in the vehicle delivered to the hirer.
                    <br/><b>2.</b>The insurance policy may be canceled if the hirer does not comply with the terms and conditions described in this document.
                    <br/><b>3.</b>The minimum age required by the insurance company to cover any eventuality in case of accident, loss or theft is 21 years of age.
                    <br/><b>4.</b>The entire insurance coverage must be consulted at the time of request to see its scope and coverage, which will depend solely and exclusively on the police report.
                    </span>
                </p>

                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>DAMAGE, LOSS, THEFT, ETC:</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                        <br/><b>1.</b>In the event that the vehicle suffers damage, loss or theft of the vehicle or any of its parts, as well as fire or broken glass, the hirer must, regardless of the fault of the driver, pay E M I Ride Rent to pay the amount of all damages, losses, as well as resulting expenses such as: the costs of change, recovery, repair, compensation for the depreciation of the value of the vehicle and also the loss of the rental fee. For any of the aforementioned events, the hirer is obliged to inform E M I Ride Rent a car immediately and inform the Police and different Emergency agencies, if necessary, the events that occurred.
                        <br/><b>2.</b>Hirer is fully responsible for any damage to the vehicle resulting from fuel contamination and/or driving through locations experiencing flooding and water damage, as well as any damage resulting from driving the vehicle outside of paved roads.
                        <br/><b>3.</b>E M I Ride Rent a car may charge the hirer the value of a compensation corresponding to the rental fee until the day the vehicle is available again for E M I Ride Rent a car in the same conditions in which it was delivered to the hirer.
                        <br/><b>4.</b>Hirer agrees to fully indemnify E M I Ride Rent a car in all respects if the insurance company denies any insurance claim filed due to hirer’s default.
                        <br/><b>5.</b>The hirer agrees to fully indemnify E M I Ride Rent a car in all respects in the event that a third party sues E M I Ride Rent a car for the actions, damages, losses or breaches caused by the hirer.
                        <br/><b>6.</b>In the event that the vehicle delivered to the hirer presents a mechanical failure,      E M I Ride Rent a car must provide a replacement vehicle immediately.
                    </span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>FUEL POLICY:</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    The vehicle must be delivered to E M I Ride Rent a car at the end of the rental agreement in the same level of fuel as when it was delivered to the hirer. Otherwise, additional fuel charges of AED 3.0 per liter will apply.
                    </span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>SALIK (DUBAI TOLL SYSTEM), DARB (ABU DHABI TOLL SYSTEM):</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                        <br/><b>1.</b>AED 5 including VAT and 20% handling charge will be charged per Salik/Darb crossing.
                        <br/><b>2.</b>Salik/Darb crossing fares are subject to change without notice.
                    </span>
                </p>
                <p className="mx-2 mt-4 pt-4">
                    <strong  style={{fontWeight:700}}>PRIVACY POLICIES FOR THE USE OF PERSONAL DATA:</strong>
                </p>
                <p className="py-1 mx-2 " style={{fontWeight:600}}>
                    <span  style={{fontWeight:400}}>
                    The hirer authorizes E M I Ride Rent a car to share their personal data with authorities such as the police, traffic department and other Criminal Investigation departments or other government authorities, if required.

                    <br/>Privacy policies can be consulted in full on our website www.emiride.com

                    <br/>NOTE: These Terms and Conditions may be translated into other languages ​​and therefore may present conflicts, in which case E M I Ride Rent a car and the client will be governed by the English version.

                    <br/>Version No 1 / November 2022
                    </span>
                </p>
            </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <img className="img-fluid my-4 py-4"  src={MapPointerImg} alt="map"/>
            </div>
            <div className='container required-documents d-flex align-items-center justify-content-center flex-column'>
                <h2 className="required-documents-title my-2">DOCUMENTS REQUIRED</h2>
                <h2 className="required-documents-text">TO RENT A CAR WITH US</h2>
            </div>

            
            <DocumentsRequired/>

            <div className='faq-container d-flex align-items-center'>
                <div className='d-flex container align-items-center justify-content-center'>
                    <img className='w-75' src={FAQImage} alt="FAQs"/>
                </div>
            </div>
          
            <div className="accordion accordion-flush" id="accordionExample">

                <FaqAccordion  tittle={"What is Salik Toll system?"} content={"Salik is the name given to Dubai's electronic road toll system. The Salik system is based on radio frequency identification technology. All vehicles are subject to a toll of AED 4 plus 5 VAT."} tittle_id={"1"} content_id={"Content1"}/>
                <FaqAccordion  tittle={"What is Darb Toll System?"} content={"Darb is the name given to Abu Dhabi's electronic road toll system. The Darb system is based on radio frequency identification technology. All vehicles are subject to a toll of AED 4 plus 5 VAT."} tittle_id={"2"} content_id={"Content2"}/>
                <FaqAccordion  tittle={"Can I add another driver to the reservation?"} content={"Yes, you can add another driver in the ADDS ON option, this may be subject to an additional cost but only at the time of making the reservation it will be shown. The additional driver will have to provide the required documents as well as the person who is taking the reservation and they must be shown physically at the pickup date."} tittle_id={"3"} content_id={"Content3"}/>
                <FaqAccordion  tittle={"What happens if I return the vehicle after the contract end time?"} content={"A grace period of 1 hour (60 minutes) is granted, in case the vehicle is not delivered within this grace period, the rate corresponding to a rental day equal to the one contracted agreement within the contract it will be no charged."} tittle_id={"4"} content_id={"Content4"}/>
                <FaqAccordion  tittle={"Can I drive on OFF-ROAD roads or in the desert?"} content={"No, it is not allowed to drive in these places and to do so would be a violation of the rental agreement since it is not allowed."} tittle_id={"5"} content_id={"Content5"}/>
                <FaqAccordion  tittle={"Who can contract the Collision Damage Waiver (CDW)?"} content={"Anyone who has a driving license older than 1 year for UAE residents and tourists."} tittle_id={"6"} content_id={"Content6"}/>
                <FaqAccordion  tittle={"About fines for violations of traffic regulations?"} content={"Most of the roads in the United Arab Emirates are controlled by speed cameras and radars which will make it very easy for you to be fined for violating traffic regulations, along the roads you will be able to find the speed limit. In the event that one or more fines are charged for infractions during the rental period of the vehicle, these will be automatically charged to the customer's credit card plus 5% VAT and 10% as a handling fee."} tittle_id={"7"} content_id={"Content7"}/>
                <FaqAccordion  tittle={"How does the deposit refund process work?"} content={"According to the norm established for car rental companies in the United Arab Emirates, we are obliged to refund the money from the deposit in a period equal to or less than 30 days from the delivery of the vehicle, but at E M I RIDE RENT A CAR we know how tedious this process can be or the need for our clients to use their money, so we will do it as quickly as we make sure that no other additional charge was generated to the vehicle during the rental period as a result of fines, tolls or others."} tittle_id={"8"} content_id={"Content8"}/>
                <FaqAccordion  tittle={"Who can rent a vehicle at E M I and what are the rental periods?"} content={"The person must be at least 21 years old and must have a valid UAE license (minimum 6 months issued) if resident. For tourists, they must have a valid driving license from the country of origin (minimum 1 year issued) or, if required, must also present an international driving permit. In relation to the rental periods E M I RIDE RENT A CAR offers a daily (24 hours minimum), weekly or monthly (30 days in case the client wants to extend this period, a new rental agreement must be made again) rental periods."} tittle_id={"9"} content_id={"Content9"}/>

            </div>
            <Footer/>
        </div>
    )

}

export default TermsConditions;