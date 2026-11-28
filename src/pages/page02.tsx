import '../components/Card/Card.css';
import '../components/Grid/Grid.css';
import '../styles/botoes.css';


export function Page02({ onMudarTela }: { onMudarTela: (tela: number) => void }) {
  return (
    <div className="app-layout">
        

        
        <main style={{ backgroundColor: '#f3f4f6', padding: '32px', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            <section className="form-wrapper" style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', maxWidth: '900px', margin: '0 auto' }}>
                
                <div className="form-header" style={{ marginBottom: '32px' }}>
                    <span className="step-indicator" style={{ color: '#0d9488', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>PASSO 1 DE 3</span>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', margin: '8px 0 4px 0' }}>Dados Básicos da Viagem</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>Preencha as informações principais para montarmos seu roteiro sob medida.</p>
                </div>

                <form className="travel-form">
                    {/* Bloco origem e destino */}
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                        <div className="form-group">
                            <label htmlFor="origem" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Cidade de Origem</label>
                            <input type="text" id="origem" name="origem" defaultValue="São Paulo - GRU" placeholder="Ex: São Paulo - GRU" style={{ width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', color: '#374151', boxSizing: 'border-box', outline: 'none' }} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="destino" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Cidade de Destino</label>
                            <input type="text" id="destino" name="destino" defaultValue="Kathmandu - Nepal" placeholder="Ex: Kathmandu - Nepal" style={{ width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', color: '#374151', boxSizing: 'border-box', outline: 'none' }} />
                        </div>
                    </div>

                    {/* Bloco de data (ida e volta) */}
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                        <div className="form-group">
                            <label htmlFor="data-ida" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Data de Partida (Ida)</label>
                            <div className="input-icon-wrapper">
                                <input type="text" id="data-ida" name="data-ida" defaultValue="12/05/2026" placeholder="DD/MM/AAAA" style={{ width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', color: '#374151', boxSizing: 'border-box', outline: 'none' }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="data-volta" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Data de Retorno (Volta)</label>
                            <div className="input-icon-wrapper">
                                <input type="text" id="data-volta" name="data-volta" defaultValue="25/05/2026" placeholder="DD/MM/AAAA" style={{ width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', color: '#374151', boxSizing: 'border-box', outline: 'none' }} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Passageiros e Motivo */}
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                        <div className="form-group">
                            <label htmlFor="passageiros" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Quantidade de Passageiros</label>
                            <select id="passageiros" name="passageiros" defaultValue="2-adultos" style={{ width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', color: '#374151', boxSizing: 'border-box', outline: 'none', backgroundColor: 'white' }}>
                                <option value="2-adultos">2 Adultos (Casal)</option>
                                <option value="1-adulto">1 Adulto</option>
                                <option value="familia">Família</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="motivo" style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Motivo / Tipo de Viagem</label>
                            <select id="motivo" name="motivo" defaultValue="ferias-lazer" style={{ width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', color: '#374151', boxSizing: 'border-box', outline: 'none', backgroundColor: 'white' }}>
                                <option value="ferias-lazer">Férias & Lazer</option>
                                <option value="negocios">Negócios</option>
                            </select>
                        </div>
                    </div>

                    {/* Botões finais do Form */}
                    <div className="form-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px' }}>
                        <button type="button" onClick={() => onMudarTela(1)} style={{ background: 'transparent', border: 'none', color: '#4b5563', fontWeight: 600, fontSize: '14px', cursor: 'pointer', padding: '8px 0' }}>Voltar</button>
                        <button type="button" onClick={() => onMudarTela(3)} className="btn btn-success" style={{ backgroundColor: '#0d9488', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>Avançar para Preferências &rarr;</button>
                    </div>
                </form>
            </section>
        </main>
      </div>
  );
}