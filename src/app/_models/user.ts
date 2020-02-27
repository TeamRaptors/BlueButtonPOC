export class OAuthAttributes {
    //------- AWS Beanstalk Deployment
    grant_type: string = 'authorization_code';
    redirect_uri: string = 'http://localhost:4200';
    client_id: string = 'PcgnlJyFhZU4WJzwuGiuuG0khHPTMU88Jr1oFZLh';
    client_secret: string = '3xZcK9f9LetNtOWww2u6GV9WjHbgmP88Z8aiFLaQTxlnugiBwK35XioX2LtULAnyCHrJ7XU0LWi16ARdiLjgw8hczD1e7diqXZ6oa6OqBj1eLjtPiQ0jCEXFGUFFrcCd';
    state: string = '8e896a59f0744a8e93bf2f1f13230be6';    

    authorizeUrl: string = 'https://sandbox.bluebutton.cms.gov/v1/o/authorize/?client_id=PcgnlJyFhZU4WJzwuGiuuG0khHPTMU88Jr1oFZLh&redirect_uri=https://71o0wq9tv8.execute-api.eu-central-1.amazonaws.com/production&response_type=code&state=8e896a59f0744a8e93bf2f1f13230be6';
}

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;   
}

export class Address {
    district : number;
    postalCode : string;
    state : number;
}

export class Patient {
    id: number;
    firstName : string;
    middleInitial: string;
    lastName : string;
    birthDate : string;
    race : string;
    gender : string;
    address : Address;    
}

export class ClaimService {
    sequence : number;
    servicePeriodStart : string;
    servicePeriodEnd : string;
    categoryCode : number;
    categoryDisplay : string;
    serviceCode : string;
    quantity : number;

    deductibleAmount : number;
    submittedCharges : number;
    allowedCharges : number;
    providerPayment : number;
    coinsurance : number;
}

export class Claim {
    id : string;
    total : number;
    fundsReserve : number;
    billablePeriodStart : string;
    billablePeriodEnd : string;
    type : string;
    typeCode : string;
    typeCodeDisplay : string;
    status : string;
    primaryPayerAmount : number;
    deductibleAmount: number;
    providerPayAmount : number;
    benePayment : number;
    submittedCharges : number;
    allowedAmount : number;
    claimUrl : string;
    services : ClaimService[];
}

export class CoverageGroup {
    group : string;
    groupDisplay : string;
    subgroup : string;
    subgroupDisplay : string;
    plan : string;
    planDisplay : string;
    subplan : string;
    subplanDisplay : string;
    class : string;
    classDisplay : string;                
    subclass : string;
    subclassDisplay : string;                    
}

export class Coverage {
    id : number;
    status : string;
    period : string;
    groups : CoverageGroup[];
}



export class EOB {
  id: number;
  beneId: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  hcpcsCode: string;
  claimCount : number;

  selfClaimStartURL : string;
  nextClaimStartURL : string;
  prevClaimStartURL : string;
  lastClaimStartURL : string;
  firstClaimStartURL : string;
  claims : Claim[];
}

export class EOBTwo {
    id: number;
    beneId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    hcpcsCode: string;
    billablePeriodStart1;
    billablePeriodEnd1;
    billablePeriodStart2;
    billablePeriodEnd2;
    billablePeriodStart3;
    billablePeriodEnd3;
    claimId1: string;
    claimId2: string;
    claimId3: string;
    claimType1: string;
    claimType2: string;
    claimType3: string;
    claimTypeCd1: string;
    claimTypeCd2: string;
    claimTypeCd3: string;
    claimTypeCdDisplay1: string;
    claimTypeCdDisplay2: string;
    claimTypeCdDisplay3: string;  
}

export class EOBDetail {
    id: number;
    beneId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    claimId: string;
    claimStatus: string;
    claimType: string; 
    claimTypeCd: string;
    claimTypeCdDisplay: string;

    paymentAmount: number;
    provider: string;
    diagnosisPrimary: string;
    hcpcsCode: string;
    billablePeriodStart: string;
    billablePeriodEnd: string;
    adjudicationDisplay1: string;
    adjudicationAmount1: number;
    adjudicationDisplay1B: string;
    adjudicationAmount1B: number;
    adjudicationDisplay2: string;
    adjudicationAmount2: number;
    adjudicationDisplay2B: string;
    adjudicationAmount2B: number;


    nameArray: string[]
    itemHcpcsCode1: string;
    itemHcpcsCode2: string;
    itemMtusCode1: string;
    itemMtusCode2: string;
    itemBetosCodeDisplay1: string;
    itemBetosCodeDisplay2: string;
    itemBetosCode1: string;
    itemBetosCode2: string;
}
