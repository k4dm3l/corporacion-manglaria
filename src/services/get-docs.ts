import { fetcher } from '@/lib/fetcher';

const KEYS = {
  financialStatementCorporacionManglaria: "1. Estado Financiero Corporación Manglaría",
  certificateOfLegalRequirements: "2. Certificado de Requisitos Legales",
  actOfConstitutionCorporacionManglaria: "3. Acta de Constitución Corporación Manglaría",
  certificateOfExistence: "4. Certificado de Existencia",
  actOfGeneralAssembly: "5. Acta de Asamblea General",
  tributaryStatementsCorporacionManglaria: "6. Estatutos Tributarios Corporación Manglaría",
  backgroundCheckCertificate: "7. Certificado de Antecedentes",
  certificateOfManagmentPositions: '8. Certificado de Cargos Directivos',
  managementReport: '9. Informe de Gestión',
  organizationAssets: '10. Patrimonio de la Organización',
  incomeStatement: '11. Declaración de Renta',
} as const;

type DocKey = keyof typeof KEYS;

type LegalDocumentYear = {
  year: number;
} & Partial<Record<DocKey, string>>;

export type DocItem = {
  label: string;
  value: string;
};

export type YearDocs = {
  year: number;
  docs: DocItem[];
};

const parseYearDocs = (yearData: LegalDocumentYear): YearDocs => {
  const docs = (Object.keys(KEYS) as DocKey[]).flatMap((key) => {
    const value = yearData[key];
    if (!value?.startsWith('http')) return [];

    return [{ label: KEYS[key], value }];
  });

  return { year: yearData.year, docs };
};

export const getDocs = async () => {
    try {
        const data = await fetcher.get(`/api/legal-documents`).then(res => res.data)
        if (!data || !Array.isArray(data)) {
            return { error: true, data: null }
        }

        const docsByYear = (data as LegalDocumentYear[])
            .map(parseYearDocs)
            .filter(({ docs }) => docs.length > 0)
            .sort((a, b) => b.year - a.year)

        return { data: docsByYear, error: false }
    } catch (e) {
        console.log('GET DOCS', { e })
        return { error: true, data: null }
    }
}
