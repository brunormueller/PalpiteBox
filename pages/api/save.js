import {GoogleSpreadsheet} from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'
const doc = new GoogleSpreadsheet('1m3_o01bRfqWrR09VX7eo0RJJ4_fcwCeIvS--rgOwzDQ')

const genCupom= () =>{
    const code = parseInt( moment().format('DDMMYYHH:mmssa')).toString(16).toUpperCase()
return code.substring(0,4) + '-' + code.substring(4,4) + '-' + code.substring(8,4)
}

export default async(req, res) =>{
    try{
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        const sheetConfig = doc.sheetsByIndex[0]
        await sheetConfig.loadCells('A2:B2')
        
        const mostrarPromocaoCell = sheetConfig.getCell(1,0)      
        
        const textoCell = sheetConfig.getCell(1,1)

        let Cupom = ''
        let Promo = ''
        if(mostrarPromocaoCell.value === 'VERDADEIRO'){
            Cupom = genCupom()
            Promo = textoCell.value
        }


        await sheet.addRow({
            Nome:data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt( data.Nota),
            'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss a'),
            Cupom,
            Promo
        })
        


        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))
            }catch (err){
                console.log(err)
        res.end(err)
            }
   
    
}