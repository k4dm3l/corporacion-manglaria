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
  managementReport: 'Informe de Gestión',
}

export const getDocs = async () => {
    try {
        const data = await fetcher.get(`/api/legal-documents`).then(res => res.data)
        if (!data) {
            return { error: true, data: null }
        }

        // Create docs array maintaining the exact order of KEYS object
        const docs = Object.keys(KEYS)
            .map(key => ({
                label: KEYS[key as keyof typeof KEYS],
                value: data[key as keyof typeof data]
            }))
            .filter(({ value }) => value && (value as string)?.startsWith('http'))

        return { data: docs, error: false }
    } catch (e) {
        console.log('GET DOCS', { e })
        return { error: true, data: null }
    }
}

