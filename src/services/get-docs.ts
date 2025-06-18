import { fetcher } from '@/lib/fetcher';

const KEYS = {
    bylaws: "Estatutos",
    chamberOfCommerce: "Cámara de Comercio",
    financialStatement: "Estado Financiero",
    financialStatementsAssembly: "Estado Financiero Asamblea",
    surplusCertificate: "Certificado de Excedentes",
  }

export const getDocs = async () => {
    try {
        const data = await fetcher.get(`/api/legal-documents`).then(res => res.data)
        if (!data) {
            return { error: true, data: null }
        }

        const docs = Object.entries(data ?? {})
        .map(([key, value]) => ({
            label: KEYS[key as keyof typeof KEYS] ?? 'Documento sin clasificación',
            value
        })).filter(({ value }) => value && (value as string)
        ?.startsWith('http'))

        return { data: docs, error: false }
    } catch (e) {
        console.log('GET DOCS', { e })
        return { error: true, data: null }
    }
}

