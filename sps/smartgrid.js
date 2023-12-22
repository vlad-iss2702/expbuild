module.exports = {
	outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* количество столбцов сетки */
	offset: '30px', /*отступы*/
	//mobileFirst: true,
	container: {
        maxWidth: '1500px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
	breakPoints: {
        m: {
            width: "2000px"
        },
        mr: {
            width: "1600px"
        },
        mt: {
            width: "1400px"
        },
        mp: {
            width: "1200px"
        },
        mds: {
            width: "1024px"
        },
        md: {
            width: "992px"
        },
        sm: {
            width: "768px"
        },
        xs: {
            width: "576px",
            fields: "15px"
        },
        xxs: {
            width: "415px"
        },
        rxs: {
            width: "412px"
        },
        txs: {
            width: "376px"
        },
        mxs: {
            width: "361px"
        },
        mmxs: {
            width: "321px"
        }
	},
    //detailedCalc: true
};