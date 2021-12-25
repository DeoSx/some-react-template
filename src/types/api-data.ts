export interface Registration {
  name: string | null;
  fullName: string | null;
  bin: string | null;
  iin: string | null;
  rnn: string | null;
  field: string[];
  factAddress: string | null;
  region: string | null;
  lawAddress: string | null;
  okpo: string | null;
  oked: string | null;
  owner: string | null;
  registerDate: Date;
  workers: string | null;
  size: string | null;
  ownership: string | null;
  kato: string | null;
  city: string | null;
  street: string | null;
  secondaryOked: string | null;
  kbe: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
}

export interface Scoring {
  subj_bin: string;
  soc_eff_coef: string;
  fin_econ: string;
  pkb: string;
  score: string;
  budget_eff_coeff: string;
  sur: string;
}

export type Licenses = License[];

interface License {
  id: number;
  created: Date | null;
  lastUpdated: Date | null;
  doc_id: Date | null;
  doc_nikad: string | null;
  st_nikad: string | null;
  st_num: string | null;
  lc_num: string | null;
  status: string | null;
  category: string | null;
  lc_type: string | null;
  start_dt: string | null;
  licensiat: string | null;
  issue_dt: string | null;
  organ: string | null;
  city: string | null;
  signed: string | null;
  add_info: LicenseAddInfo;
  series: string | null;
  spec_cond: string | null;
  field: string | null;
  bin: string | null;
  iin: string | null;
  doc_url: string | null;
}

interface LicenseAddInfo {
  id: number;
  created: Date | null;
  lastUpdated: Date | null;
  lc_id: string | null;
  lc_num: string | null;
  lc_issue_dt: string | null;
  lc_field: string | null;
  lc_subfield: string | null;
  lc_territory: string | null;
}

export type Finances = FinanceItem[];

export interface FinanceItem {
  id: number;
  loanCount: number;
  dynamics: number;
  amount: number;
  year: number;
}

export interface Finance {
  total: number;
  lastUpdated: Date;
  status: string;
  content: Finances;
}

export type Declarations = DeclarationItem[];

export interface DeclarationItem {
  id: number;
  created: Date | null;
  lastUpdated: Date | null;
  companyId: number;
  type: Type;
  organ: string | null;
  startDate: string | null;
  endDate: string | null;
  registerNumber: string | null;
  blankNumber?: string | null;
  productName?: string | null;
  requirement?: string | null;
  reasonIssue?: string | null;
  headOps?: string | null;
  supplier?: string | null;
  companyBin?: string | null;
  companyName?: string | null;
}

export type Litigation = LitigationItem[];

export interface LitigationItem {
  id: number;
  created: Date | null;
  lastUpdated: Date | null;
  category: string | null;
  date: Date | null;
  number: string | null;
  part: string | null;
  organ: string | null;
  result: string | null;
  status: string | null;
  company: string | null;
  type: Type[];
  year: number;
  identifier: string | null;
  documentList: LitigationItemDocumentList[];
}

export interface Type {
  id: number;
  name: string | null;
}

export interface LitigationItemDocumentList {
  docDate: string | null;
  docName: string | null;
  fileUrl: string | null;
  filename: string | null;
}

export type AdmViolationList = AdmViolationItem[];

export interface AdmViolationItem {
  number: string;
  dataConside: string | null;
  dataCommit: string | null;
  agency: string | null;
  measure: string | null;
  size: string | null;
  numberplate: string | null;
  status: string | null;
  url: string | null;
}

export type ProcurementList = ProcurementItem[];

export interface ProcurementItem {
  id: number;
  number: string | null;
  name: string | null;
  amount: string | null;
  client: string | null;
  category: string | null;
  method: string | null;
  status?: ProcurementStatus | null;
  publicDate: Date | null;
  openDate: Date | null;
  closeDate: Date | null;
  codeEnrc: string | null;
  location: string | null;
  description: string | null;
  area: string | null;
  region: string | null;
  price: number | null;
  participants: ProcurementParticipant[];
  documentList: [];
  winner: ProcurementWinner | null;
}

interface ProcurementParticipant {
  id: number;
  winner: boolean;
  companyName: string | null;
  bin: string | null;
  iin: string | null;
  companyId: number;
}

interface ProcurementStatus {
  id: number;
  name: string | null;
}

interface ProcurementWinner extends Omit<Registration, 'email' | 'phone' | 'website'> {
  id: number;
  okedFull: string | null;
  founderList: string | null;
  statusList: string | null;
  contacts: string | null;
  stateInvolvement: string | null;
  workersType: string | null;
  foundersNum: string | null;
  foundersStatus: string | null;
  foundersUpdated: Date;
  edoc: string | null;
  parentBin: string | null;
  parentName: string | null;
  parentId: string | null;
  apiStatus: string | null;
  apiStartDate: string | null;
  apiEndDate: string | null;
  lastRegisterDate: string | null;
  contactsFull: string | null;
  secondaryOkedFull: string | null;
  casesStatus: string | null;
  casesUpdated: Date;
  casesSynced: Date;
  contractCount: string | null;
  tenderSummary: string | null;
  licenseCount: number | null;
  opi: string | null;
  nds: string | null;
  ndsPayer: string | null;
  created: Date;
  lastUpdated: Date;
  ip: string | null;
}

export type GovernmentContractList = GovernmentContractItem[];

export interface GovernmentContractItem {
  number: string;
  type: string | null;
  desc: string | null;
  customer: string | null;
  date: string | null;
  sum: string | null;
  method: string | null;
  status: string | null;
  contractNumber: string | null;
  finYear: number | null;
  endDate: string | null;
  planExecDate: string | null;
  factSum: number | null;
  signReasonDocName: string | null;
  contractMs: number | null;
  customerBin: string | null;
  customerBik: string | null;
  customerIik: string | null;
  customerBankName: string | null;
  supplierBiin: string | null;
  supplierBik: string | null;
  supplierIik: string | null;
  supplierBankName: string | null;
}

export type AffiliationAccountantList = AffiliationAccountantItem[];

export interface AffiliationAccountantItem {
  id: number | null;
  created: Date | null;
  lastUpdated: Date | null;
  name: string | null;
  certificator: string | null;
  certNumber: string | null;
  certIssueDate: Date | null;
  profOrganization: string | null;
  ticketNumber: string | null;
  pobDate: Date | null;
  srcIdentifier: string | null;
  srcCompany: number | null;
  srcName: string | null;
}

export type AffiliationExecutiveList = AffiliationExecutiveItem[];

export interface AffiliationExecutiveItem {
  id: number | null;
  created: Date | null;
  lastUpdated: Date | null;
  name: string | null;
  decisionNum: string | null;
  decisionDate: Date | null;
  fax: string | null;
  email: string | null;
  position: string | null;
  questions: string | null;
  srcIdentifier: string | null;
  srcName: string | null;
  srcCompany: number | null;
}

export type AffiliationBoardMemberList = AffiliationBoardMemberItem[];

export interface AffiliationBoardMemberItem {
  id: number | null;
  created: Date | null;
  lastUpdated: Date | null;
  srcIdentifier: string | null;
  srcCompany: number | null;
  srcName: string | null;
  name: string | null;
  company: null;
  identifier: string | null;
  decisionDate: Date | null;
  decisionNum: string | null;
  reportDate: Date | null;
}

export type AffiliationShareholderList = AffiliationShareholderItem[];

export interface AffiliationShareholderItem {
  id: number | null;
  created: Date | null;
  lastUpdated: Date | null;
  srcIdentifier: string | null;
  srcCompany: number | null;
  srcName: string | null;
  name: string | null;
  company: string | null;
  identifier: string | null;
  person: boolean | null;
  resident: boolean | null;
  share: number | null;
  reportDate: Date | null;
}

export type AffiliationMainList = AffiliationMainItem[];

export interface AffiliationMainItem {
  id: number | null;
  created: Date | null;
  lastUpdated: Date | null;
  srcIdentifier: string | null;
  srcCompany: number | null;
  srcName: string | null;
  trgIdentifier: string | null;
  trgCompany: number | null;
  trgName: string | null;
  trgPerson: boolean | null;
  affDate: Date | null;
  flBirthday: string | null;
  ulRegisterDate: Date | null;
  ulGosNumber: string | null;
  reason: string | null;
  reportDate: Date | null;
  type: AffiliationMainType | null;
}

export interface AffiliationMainType {
  id: number | null;
  name: string | null;
}

export type AffiliationRelationList = AffiliationRelationItem[];

export interface AffiliationRelationItem {
  id: number | null;
  created: Date | null;
  lastUpdated: Date | null;
  srcIdentifier: string | null;
  srcName: string | null;
  srcCompany: number | null;
  src: string | null;
  url: string | null;
  type: string | null;
  year: number | null;
  updated: Date | null;
  trgName: string | null;
  trgIdentifier: string | null;
  trgCompany: string | null;
  trgOpiId: string | null;
  section: string | null;
}

export interface Affiliation {
  accountantList: AffiliationAccountantList;
  executiveList: AffiliationExecutiveList;
  boardMemberList: AffiliationBoardMemberList;
  shareholderList: AffiliationShareholderList;
  affiliationList: AffiliationMainList;
  relationList: AffiliationRelationList;
}

export type Reliability = ReliabilityItem[];

export interface ReliabilityItem {
  id: number;
  created: Date | null;
  lastUpdated: Date | null;
  type: ReliabilityType;
  rnn: string | null;
  bin: string | null;
  iin: string | null;
  content: any;
  status: 'YES' | 'NO' | null;
}

export type ReliabilityType = {
  id: number;
  name: string | null;
};

export type Certificates = Certificate[];

export interface Certificate {
  id: number;
  created: Date | null;
  lastUpdated: Date | null;
  companyId: number;
  identifier: string | null;
  personName: string | null;
  workPlace: string | null;
  rppName: string | null;
  certificateNum: string | null;
  blankNum: string | null;
  goal: string | null;
  category: string | null;
  productName: string | null;
  issueDate: string | null;
  endDate: string | null;
  status: string | null;
  codeTnVed: string | null;
  docNumber: string | null;
  license: string | null;
  ops: string | null;
  requirements: string | null;
  auditor: string | null;
  typeId: number;
}
