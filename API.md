# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CertRequest <a name="@cdktf/provider-tls.CertRequest"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/r/cert_request tls_cert_request}.

#### Initializers <a name="@cdktf/provider-tls.CertRequest.Initializer"></a>

```typescript
import { CertRequest } from '@cdktf/provider-tls'

new CertRequest(scope: Construct, id: string, config: CertRequestConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.parameter.config"></a>

- *Type:* [`@cdktf/provider-tls.CertRequestConfig`](#@cdktf/provider-tls.CertRequestConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDnsNames` <a name="@cdktf/provider-tls.CertRequest.resetDnsNames"></a>

```typescript
public resetDnsNames()
```

##### `resetIpAddresses` <a name="@cdktf/provider-tls.CertRequest.resetIpAddresses"></a>

```typescript
public resetIpAddresses()
```

##### `resetKeyAlgorithm` <a name="@cdktf/provider-tls.CertRequest.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm()
```

##### `resetUris` <a name="@cdktf/provider-tls.CertRequest.resetUris"></a>

```typescript
public resetUris()
```


#### Properties <a name="Properties"></a>

##### `certRequestPem`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.property.certRequestPem"></a>

```typescript
public readonly certRequestPem: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `dnsNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequest.property.dnsNamesInput"></a>

```typescript
public readonly dnsNamesInput: string[];
```

- *Type:* `string`[]

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequest.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: string[];
```

- *Type:* `string`[]

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequest.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* `string`

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequest.property.privateKeyPemInput"></a>

```typescript
public readonly privateKeyPemInput: string;
```

- *Type:* `string`

---

##### `subjectInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequest.property.subjectInput"></a>

```typescript
public readonly subjectInput: CertRequestSubject[] | IResolvable;
```

- *Type:* [`@cdktf/provider-tls.CertRequestSubject`](#@cdktf/provider-tls.CertRequestSubject)[] | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `urisInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequest.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* `string`[]

---

##### `dnsNames`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* `string`[]

---

##### `ipAddresses`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* `string`[]

---

##### `keyAlgorithm`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* `string`

---

##### `privateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.property.subject"></a>

```typescript
public readonly subject: CertRequestSubject[] | IResolvable;
```

- *Type:* [`@cdktf/provider-tls.CertRequestSubject`](#@cdktf/provider-tls.CertRequestSubject)[] | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `uris`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequest.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-tls.CertRequest.property.tfResourceType"></a>

- *Type:* `string`

---

### DataTlsCertificate <a name="@cdktf/provider-tls.DataTlsCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/d/certificate tls_certificate}.

#### Initializers <a name="@cdktf/provider-tls.DataTlsCertificate.Initializer"></a>

```typescript
import { DataTlsCertificate } from '@cdktf/provider-tls'

new DataTlsCertificate(scope: Construct, id: string, config: DataTlsCertificateConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.parameter.config"></a>

- *Type:* [`@cdktf/provider-tls.DataTlsCertificateConfig`](#@cdktf/provider-tls.DataTlsCertificateConfig)

---

#### Methods <a name="Methods"></a>

##### `resetVerifyChain` <a name="@cdktf/provider-tls.DataTlsCertificate.resetVerifyChain"></a>

```typescript
public resetVerifyChain()
```


#### Properties <a name="Properties"></a>

##### `certificates`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.property.certificates"></a>

```typescript
public readonly certificates: DataTlsCertificateCertificatesList;
```

- *Type:* [`@cdktf/provider-tls.DataTlsCertificateCertificatesList`](#@cdktf/provider-tls.DataTlsCertificateCertificatesList)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `urlInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* `string`

---

##### `verifyChainInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.property.verifyChainInput"></a>

```typescript
public readonly verifyChainInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

##### `verifyChain`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificate.property.verifyChain"></a>

```typescript
public readonly verifyChain: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-tls.DataTlsCertificate.property.tfResourceType"></a>

- *Type:* `string`

---

### DataTlsPublicKey <a name="@cdktf/provider-tls.DataTlsPublicKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/d/public_key tls_public_key}.

#### Initializers <a name="@cdktf/provider-tls.DataTlsPublicKey.Initializer"></a>

```typescript
import { DataTlsPublicKey } from '@cdktf/provider-tls'

new DataTlsPublicKey(scope: Construct, id: string, config?: DataTlsPublicKeyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.parameter.config"></a>

- *Type:* [`@cdktf/provider-tls.DataTlsPublicKeyConfig`](#@cdktf/provider-tls.DataTlsPublicKeyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetPrivateKeyOpenssh` <a name="@cdktf/provider-tls.DataTlsPublicKey.resetPrivateKeyOpenssh"></a>

```typescript
public resetPrivateKeyOpenssh()
```

##### `resetPrivateKeyPem` <a name="@cdktf/provider-tls.DataTlsPublicKey.resetPrivateKeyPem"></a>

```typescript
public resetPrivateKeyPem()
```


#### Properties <a name="Properties"></a>

##### `algorithm`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `publicKeyFingerprintMd5`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.publicKeyFingerprintMd5"></a>

```typescript
public readonly publicKeyFingerprintMd5: string;
```

- *Type:* `string`

---

##### `publicKeyFingerprintSha256`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.publicKeyFingerprintSha256"></a>

```typescript
public readonly publicKeyFingerprintSha256: string;
```

- *Type:* `string`

---

##### `publicKeyOpenssh`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.publicKeyOpenssh"></a>

```typescript
public readonly publicKeyOpenssh: string;
```

- *Type:* `string`

---

##### `publicKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.publicKeyPem"></a>

```typescript
public readonly publicKeyPem: string;
```

- *Type:* `string`

---

##### `privateKeyOpensshInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.privateKeyOpensshInput"></a>

```typescript
public readonly privateKeyOpensshInput: string;
```

- *Type:* `string`

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.privateKeyPemInput"></a>

```typescript
public readonly privateKeyPemInput: string;
```

- *Type:* `string`

---

##### `privateKeyOpenssh`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.privateKeyOpenssh"></a>

```typescript
public readonly privateKeyOpenssh: string;
```

- *Type:* `string`

---

##### `privateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsPublicKey.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-tls.DataTlsPublicKey.property.tfResourceType"></a>

- *Type:* `string`

---

### LocallySignedCert <a name="@cdktf/provider-tls.LocallySignedCert"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert tls_locally_signed_cert}.

#### Initializers <a name="@cdktf/provider-tls.LocallySignedCert.Initializer"></a>

```typescript
import { LocallySignedCert } from '@cdktf/provider-tls'

new LocallySignedCert(scope: Construct, id: string, config: LocallySignedCertConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.parameter.config"></a>

- *Type:* [`@cdktf/provider-tls.LocallySignedCertConfig`](#@cdktf/provider-tls.LocallySignedCertConfig)

---

#### Methods <a name="Methods"></a>

##### `resetCaKeyAlgorithm` <a name="@cdktf/provider-tls.LocallySignedCert.resetCaKeyAlgorithm"></a>

```typescript
public resetCaKeyAlgorithm()
```

##### `resetEarlyRenewalHours` <a name="@cdktf/provider-tls.LocallySignedCert.resetEarlyRenewalHours"></a>

```typescript
public resetEarlyRenewalHours()
```

##### `resetIsCaCertificate` <a name="@cdktf/provider-tls.LocallySignedCert.resetIsCaCertificate"></a>

```typescript
public resetIsCaCertificate()
```

##### `resetSetSubjectKeyId` <a name="@cdktf/provider-tls.LocallySignedCert.resetSetSubjectKeyId"></a>

```typescript
public resetSetSubjectKeyId()
```


#### Properties <a name="Properties"></a>

##### `certPem`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.certPem"></a>

```typescript
public readonly certPem: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `readyForRenewal`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.readyForRenewal"></a>

```typescript
public readonly readyForRenewal: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `validityEndTime`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.validityEndTime"></a>

```typescript
public readonly validityEndTime: string;
```

- *Type:* `string`

---

##### `validityStartTime`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.validityStartTime"></a>

```typescript
public readonly validityStartTime: string;
```

- *Type:* `string`

---

##### `allowedUsesInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.allowedUsesInput"></a>

```typescript
public readonly allowedUsesInput: string[];
```

- *Type:* `string`[]

---

##### `caCertPemInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.caCertPemInput"></a>

```typescript
public readonly caCertPemInput: string;
```

- *Type:* `string`

---

##### `caKeyAlgorithmInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.caKeyAlgorithmInput"></a>

```typescript
public readonly caKeyAlgorithmInput: string;
```

- *Type:* `string`

---

##### `caPrivateKeyPemInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.caPrivateKeyPemInput"></a>

```typescript
public readonly caPrivateKeyPemInput: string;
```

- *Type:* `string`

---

##### `certRequestPemInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.certRequestPemInput"></a>

```typescript
public readonly certRequestPemInput: string;
```

- *Type:* `string`

---

##### `earlyRenewalHoursInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.earlyRenewalHoursInput"></a>

```typescript
public readonly earlyRenewalHoursInput: number;
```

- *Type:* `number`

---

##### `isCaCertificateInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.isCaCertificateInput"></a>

```typescript
public readonly isCaCertificateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `setSubjectKeyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.setSubjectKeyIdInput"></a>

```typescript
public readonly setSubjectKeyIdInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `validityPeriodHoursInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.validityPeriodHoursInput"></a>

```typescript
public readonly validityPeriodHoursInput: number;
```

- *Type:* `number`

---

##### `allowedUses`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.allowedUses"></a>

```typescript
public readonly allowedUses: string[];
```

- *Type:* `string`[]

---

##### `caCertPem`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.caCertPem"></a>

```typescript
public readonly caCertPem: string;
```

- *Type:* `string`

---

##### `caKeyAlgorithm`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.caKeyAlgorithm"></a>

```typescript
public readonly caKeyAlgorithm: string;
```

- *Type:* `string`

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.caPrivateKeyPem"></a>

```typescript
public readonly caPrivateKeyPem: string;
```

- *Type:* `string`

---

##### `certRequestPem`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.certRequestPem"></a>

```typescript
public readonly certRequestPem: string;
```

- *Type:* `string`

---

##### `earlyRenewalHours`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.earlyRenewalHours"></a>

```typescript
public readonly earlyRenewalHours: number;
```

- *Type:* `number`

---

##### `isCaCertificate`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.isCaCertificate"></a>

```typescript
public readonly isCaCertificate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `setSubjectKeyId`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.setSubjectKeyId"></a>

```typescript
public readonly setSubjectKeyId: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `validityPeriodHours`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCert.property.validityPeriodHours"></a>

```typescript
public readonly validityPeriodHours: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-tls.LocallySignedCert.property.tfResourceType"></a>

- *Type:* `string`

---

### PrivateKey <a name="@cdktf/provider-tls.PrivateKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/r/private_key tls_private_key}.

#### Initializers <a name="@cdktf/provider-tls.PrivateKey.Initializer"></a>

```typescript
import { PrivateKey } from '@cdktf/provider-tls'

new PrivateKey(scope: Construct, id: string, config: PrivateKeyConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.parameter.config"></a>

- *Type:* [`@cdktf/provider-tls.PrivateKeyConfig`](#@cdktf/provider-tls.PrivateKeyConfig)

---

#### Methods <a name="Methods"></a>

##### `resetEcdsaCurve` <a name="@cdktf/provider-tls.PrivateKey.resetEcdsaCurve"></a>

```typescript
public resetEcdsaCurve()
```

##### `resetRsaBits` <a name="@cdktf/provider-tls.PrivateKey.resetRsaBits"></a>

```typescript
public resetRsaBits()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `privateKeyOpenssh`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.privateKeyOpenssh"></a>

```typescript
public readonly privateKeyOpenssh: string;
```

- *Type:* `string`

---

##### `privateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* `string`

---

##### `publicKeyFingerprintMd5`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.publicKeyFingerprintMd5"></a>

```typescript
public readonly publicKeyFingerprintMd5: string;
```

- *Type:* `string`

---

##### `publicKeyFingerprintSha256`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.publicKeyFingerprintSha256"></a>

```typescript
public readonly publicKeyFingerprintSha256: string;
```

- *Type:* `string`

---

##### `publicKeyOpenssh`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.publicKeyOpenssh"></a>

```typescript
public readonly publicKeyOpenssh: string;
```

- *Type:* `string`

---

##### `publicKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.publicKeyPem"></a>

```typescript
public readonly publicKeyPem: string;
```

- *Type:* `string`

---

##### `algorithmInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKey.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* `string`

---

##### `ecdsaCurveInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKey.property.ecdsaCurveInput"></a>

```typescript
public readonly ecdsaCurveInput: string;
```

- *Type:* `string`

---

##### `rsaBitsInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKey.property.rsaBitsInput"></a>

```typescript
public readonly rsaBitsInput: number;
```

- *Type:* `number`

---

##### `algorithm`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* `string`

---

##### `ecdsaCurve`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.ecdsaCurve"></a>

```typescript
public readonly ecdsaCurve: string;
```

- *Type:* `string`

---

##### `rsaBits`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKey.property.rsaBits"></a>

```typescript
public readonly rsaBits: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-tls.PrivateKey.property.tfResourceType"></a>

- *Type:* `string`

---

### SelfSignedCert <a name="@cdktf/provider-tls.SelfSignedCert"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert tls_self_signed_cert}.

#### Initializers <a name="@cdktf/provider-tls.SelfSignedCert.Initializer"></a>

```typescript
import { SelfSignedCert } from '@cdktf/provider-tls'

new SelfSignedCert(scope: Construct, id: string, config: SelfSignedCertConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.parameter.config"></a>

- *Type:* [`@cdktf/provider-tls.SelfSignedCertConfig`](#@cdktf/provider-tls.SelfSignedCertConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDnsNames` <a name="@cdktf/provider-tls.SelfSignedCert.resetDnsNames"></a>

```typescript
public resetDnsNames()
```

##### `resetEarlyRenewalHours` <a name="@cdktf/provider-tls.SelfSignedCert.resetEarlyRenewalHours"></a>

```typescript
public resetEarlyRenewalHours()
```

##### `resetIpAddresses` <a name="@cdktf/provider-tls.SelfSignedCert.resetIpAddresses"></a>

```typescript
public resetIpAddresses()
```

##### `resetIsCaCertificate` <a name="@cdktf/provider-tls.SelfSignedCert.resetIsCaCertificate"></a>

```typescript
public resetIsCaCertificate()
```

##### `resetKeyAlgorithm` <a name="@cdktf/provider-tls.SelfSignedCert.resetKeyAlgorithm"></a>

```typescript
public resetKeyAlgorithm()
```

##### `resetSetSubjectKeyId` <a name="@cdktf/provider-tls.SelfSignedCert.resetSetSubjectKeyId"></a>

```typescript
public resetSetSubjectKeyId()
```

##### `resetUris` <a name="@cdktf/provider-tls.SelfSignedCert.resetUris"></a>

```typescript
public resetUris()
```


#### Properties <a name="Properties"></a>

##### `certPem`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.certPem"></a>

```typescript
public readonly certPem: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `readyForRenewal`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.readyForRenewal"></a>

```typescript
public readonly readyForRenewal: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `validityEndTime`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.validityEndTime"></a>

```typescript
public readonly validityEndTime: string;
```

- *Type:* `string`

---

##### `validityStartTime`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.validityStartTime"></a>

```typescript
public readonly validityStartTime: string;
```

- *Type:* `string`

---

##### `allowedUsesInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.allowedUsesInput"></a>

```typescript
public readonly allowedUsesInput: string[];
```

- *Type:* `string`[]

---

##### `dnsNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.dnsNamesInput"></a>

```typescript
public readonly dnsNamesInput: string[];
```

- *Type:* `string`[]

---

##### `earlyRenewalHoursInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.earlyRenewalHoursInput"></a>

```typescript
public readonly earlyRenewalHoursInput: number;
```

- *Type:* `number`

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: string[];
```

- *Type:* `string`[]

---

##### `isCaCertificateInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.isCaCertificateInput"></a>

```typescript
public readonly isCaCertificateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.keyAlgorithmInput"></a>

```typescript
public readonly keyAlgorithmInput: string;
```

- *Type:* `string`

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.privateKeyPemInput"></a>

```typescript
public readonly privateKeyPemInput: string;
```

- *Type:* `string`

---

##### `setSubjectKeyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.setSubjectKeyIdInput"></a>

```typescript
public readonly setSubjectKeyIdInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `subjectInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.subjectInput"></a>

```typescript
public readonly subjectInput: IResolvable | SelfSignedCertSubject[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-tls.SelfSignedCertSubject`](#@cdktf/provider-tls.SelfSignedCertSubject)[]

---

##### `urisInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* `string`[]

---

##### `validityPeriodHoursInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.validityPeriodHoursInput"></a>

```typescript
public readonly validityPeriodHoursInput: number;
```

- *Type:* `number`

---

##### `allowedUses`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.allowedUses"></a>

```typescript
public readonly allowedUses: string[];
```

- *Type:* `string`[]

---

##### `dnsNames`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* `string`[]

---

##### `earlyRenewalHours`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.earlyRenewalHours"></a>

```typescript
public readonly earlyRenewalHours: number;
```

- *Type:* `number`

---

##### `ipAddresses`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* `string`[]

---

##### `isCaCertificate`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.isCaCertificate"></a>

```typescript
public readonly isCaCertificate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `keyAlgorithm`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* `string`

---

##### `privateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* `string`

---

##### `setSubjectKeyId`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.setSubjectKeyId"></a>

```typescript
public readonly setSubjectKeyId: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `subject`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.subject"></a>

```typescript
public readonly subject: IResolvable | SelfSignedCertSubject[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-tls.SelfSignedCertSubject`](#@cdktf/provider-tls.SelfSignedCertSubject)[]

---

##### `uris`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* `string`[]

---

##### `validityPeriodHours`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCert.property.validityPeriodHours"></a>

```typescript
public readonly validityPeriodHours: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-tls.SelfSignedCert.property.tfResourceType"></a>

- *Type:* `string`

---

### TlsProvider <a name="@cdktf/provider-tls.TlsProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/tls tls}.

#### Initializers <a name="@cdktf/provider-tls.TlsProvider.Initializer"></a>

```typescript
import { TlsProvider } from '@cdktf/provider-tls'

new TlsProvider(scope: Construct, id: string, config?: TlsProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tls.TlsProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tls.TlsProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-tls.TlsProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-tls.TlsProviderConfig`](#@cdktf/provider-tls.TlsProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-tls.TlsProvider.resetAlias"></a>

```typescript
public resetAlias()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-tls.TlsProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-tls.TlsProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-tls.TlsProvider.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### CertRequestConfig <a name="@cdktf/provider-tls.CertRequestConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CertRequestConfig } from '@cdktf/provider-tls'

const certRequestConfig: CertRequestConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `privateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* `string`

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#private_key_pem CertRequest#private_key_pem}

---

##### `subject`<sup>Required</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.subject"></a>

```typescript
public readonly subject: CertRequestSubject[] | IResolvable;
```

- *Type:* [`@cdktf/provider-tls.CertRequestSubject`](#@cdktf/provider-tls.CertRequestSubject)[] | [`cdktf.IResolvable`](#cdktf.IResolvable)

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#subject CertRequest#subject}

---

##### `dnsNames`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* `string`[]

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#dns_names CertRequest#dns_names}

---

##### `ipAddresses`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* `string`[]

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#ip_addresses CertRequest#ip_addresses}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* `string`

Name of the algorithm used when generating the private key provided in `private_key_pem`.

**NOTE**: this is deprecated and ignored, as the key algorithm is now inferred from the key. 

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#key_algorithm CertRequest#key_algorithm}

---

##### `uris`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestConfig.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* `string`[]

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#uris CertRequest#uris}

---

### CertRequestSubject <a name="@cdktf/provider-tls.CertRequestSubject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CertRequestSubject } from '@cdktf/provider-tls'

const certRequestSubject: CertRequestSubject = { ... }
```

##### `commonName`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* `string`

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#common_name CertRequest#common_name}

---

##### `country`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* `string`

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#country CertRequest#country}

---

##### `locality`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* `string`

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#locality CertRequest#locality}

---

##### `organization`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#organization CertRequest#organization}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* `string`

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#organizational_unit CertRequest#organizational_unit}

---

##### `postalCode`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* `string`

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#postal_code CertRequest#postal_code}

---

##### `province`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* `string`

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#province CertRequest#province}

---

##### `serialNumber`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* `string`

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#serial_number CertRequest#serial_number}

---

##### `streetAddress`<sup>Optional</sup> <a name="@cdktf/provider-tls.CertRequestSubject.property.streetAddress"></a>

```typescript
public readonly streetAddress: string[];
```

- *Type:* `string`[]

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#street_address CertRequest#street_address}

---

### DataTlsCertificateCertificates <a name="@cdktf/provider-tls.DataTlsCertificateCertificates"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataTlsCertificateCertificates } from '@cdktf/provider-tls'

const dataTlsCertificateCertificates: DataTlsCertificateCertificates = { ... }
```

### DataTlsCertificateConfig <a name="@cdktf/provider-tls.DataTlsCertificateConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataTlsCertificateConfig } from '@cdktf/provider-tls'

const dataTlsCertificateConfig: DataTlsCertificateConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsCertificateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

The URL of the website to get the certificates from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/d/certificate#url DataTlsCertificate#url}

---

##### `verifyChain`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsCertificateConfig.property.verifyChain"></a>

```typescript
public readonly verifyChain: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether to verify the certificate chain while parsing it or not (default: `true`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/d/certificate#verify_chain DataTlsCertificate#verify_chain}

---

### DataTlsPublicKeyConfig <a name="@cdktf/provider-tls.DataTlsPublicKeyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DataTlsPublicKeyConfig } from '@cdktf/provider-tls'

const dataTlsPublicKeyConfig: DataTlsPublicKeyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKeyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `privateKeyOpenssh`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKeyConfig.property.privateKeyOpenssh"></a>

```typescript
public readonly privateKeyOpenssh: string;
```

- *Type:* `string`

The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. Currently-supported algorithms for keys are `RSA`, `ECDSA` and `ED25519`. This is _mutually exclusive_ with `private_key_pem`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/d/public_key#private_key_openssh DataTlsPublicKey#private_key_openssh}

---

##### `privateKeyPem`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsPublicKeyConfig.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* `string`

The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. Currently-supported algorithms for keys are `RSA`, `ECDSA` and `ED25519`. This is _mutually exclusive_ with `private_key_openssh`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/d/public_key#private_key_pem DataTlsPublicKey#private_key_pem}

---

### LocallySignedCertConfig <a name="@cdktf/provider-tls.LocallySignedCertConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { LocallySignedCertConfig } from '@cdktf/provider-tls'

const locallySignedCertConfig: LocallySignedCertConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `allowedUses`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.allowedUses"></a>

```typescript
public readonly allowedUses: string[];
```

- *Type:* `string`[]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `caCertPem`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.caCertPem"></a>

```typescript
public readonly caCertPem: string;
```

- *Type:* `string`

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.caPrivateKeyPem"></a>

```typescript
public readonly caPrivateKeyPem: string;
```

- *Type:* `string`

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `certRequestPem`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.certRequestPem"></a>

```typescript
public readonly certRequestPem: string;
```

- *Type:* `string`

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.validityPeriodHours"></a>

```typescript
public readonly validityPeriodHours: number;
```

- *Type:* `number`

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `caKeyAlgorithm`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.caKeyAlgorithm"></a>

```typescript
public readonly caKeyAlgorithm: string;
```

- *Type:* `string`

Name of the algorithm used when generating the private key provided in `ca_private_key_pem`.

**NOTE**: this is deprecated and ignored, as the key algorithm is now inferred from the key. 

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#ca_key_algorithm LocallySignedCert#ca_key_algorithm}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.earlyRenewalHours"></a>

```typescript
public readonly earlyRenewalHours: number;
```

- *Type:* `number`

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.isCaCertificate"></a>

```typescript
public readonly isCaCertificate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="@cdktf/provider-tls.LocallySignedCertConfig.property.setSubjectKeyId"></a>

```typescript
public readonly setSubjectKeyId: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---

### PrivateKeyConfig <a name="@cdktf/provider-tls.PrivateKeyConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PrivateKeyConfig } from '@cdktf/provider-tls'

const privateKeyConfig: PrivateKeyConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKeyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `algorithm`<sup>Required</sup> <a name="@cdktf/provider-tls.PrivateKeyConfig.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* `string`

Name of the algorithm to use when generating the private key. Currently-supported values are `RSA`, `ECDSA` and `ED25519`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/private_key#algorithm PrivateKey#algorithm}

---

##### `ecdsaCurve`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKeyConfig.property.ecdsaCurve"></a>

```typescript
public readonly ecdsaCurve: string;
```

- *Type:* `string`

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are `P224`, `P256`, `P384` or `P521` (default: `P224`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/private_key#ecdsa_curve PrivateKey#ecdsa_curve}

---

##### `rsaBits`<sup>Optional</sup> <a name="@cdktf/provider-tls.PrivateKeyConfig.property.rsaBits"></a>

```typescript
public readonly rsaBits: number;
```

- *Type:* `number`

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/private_key#rsa_bits PrivateKey#rsa_bits}

---

### SelfSignedCertConfig <a name="@cdktf/provider-tls.SelfSignedCertConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SelfSignedCertConfig } from '@cdktf/provider-tls'

const selfSignedCertConfig: SelfSignedCertConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `allowedUses`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.allowedUses"></a>

```typescript
public readonly allowedUses: string[];
```

- *Type:* `string`[]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}

---

##### `privateKeyPem`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* `string`

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}

---

##### `subject`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.subject"></a>

```typescript
public readonly subject: IResolvable | SelfSignedCertSubject[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-tls.SelfSignedCertSubject`](#@cdktf/provider-tls.SelfSignedCertSubject)[]

subject block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#subject SelfSignedCert#subject}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.validityPeriodHours"></a>

```typescript
public readonly validityPeriodHours: number;
```

- *Type:* `number`

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}

---

##### `dnsNames`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* `string`[]

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#dns_names SelfSignedCert#dns_names}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.earlyRenewalHours"></a>

```typescript
public readonly earlyRenewalHours: number;
```

- *Type:* `number`

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}

---

##### `ipAddresses`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* `string`[]

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.isCaCertificate"></a>

```typescript
public readonly isCaCertificate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* `string`

Name of the algorithm used when generating the private key provided in `private_key_pem`.

**NOTE**: this is deprecated and ignored, as the key algorithm is now inferred from the key. 

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#key_algorithm SelfSignedCert#key_algorithm}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.setSubjectKeyId"></a>

```typescript
public readonly setSubjectKeyId: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}

---

##### `uris`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertConfig.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* `string`[]

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#uris SelfSignedCert#uris}

---

### SelfSignedCertSubject <a name="@cdktf/provider-tls.SelfSignedCertSubject"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SelfSignedCertSubject } from '@cdktf/provider-tls'

const selfSignedCertSubject: SelfSignedCertSubject = { ... }
```

##### `commonName`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* `string`

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#common_name SelfSignedCert#common_name}

---

##### `country`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* `string`

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#country SelfSignedCert#country}

---

##### `locality`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* `string`

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#locality SelfSignedCert#locality}

---

##### `organization`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#organization SelfSignedCert#organization}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* `string`

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}

---

##### `postalCode`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* `string`

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#postal_code SelfSignedCert#postal_code}

---

##### `province`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* `string`

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#province SelfSignedCert#province}

---

##### `serialNumber`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* `string`

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#serial_number SelfSignedCert#serial_number}

---

##### `streetAddress`<sup>Optional</sup> <a name="@cdktf/provider-tls.SelfSignedCertSubject.property.streetAddress"></a>

```typescript
public readonly streetAddress: string[];
```

- *Type:* `string`[]

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/self_signed_cert#street_address SelfSignedCert#street_address}

---

### TlsProviderConfig <a name="@cdktf/provider-tls.TlsProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { TlsProviderConfig } from '@cdktf/provider-tls'

const tlsProviderConfig: TlsProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-tls.TlsProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls#alias TlsProvider#alias}

---

## Classes <a name="Classes"></a>

### DataTlsCertificateCertificatesList <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesList"></a>

#### Initializers <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesList.Initializer"></a>

```typescript
import { DataTlsCertificateCertificatesList } from '@cdktf/provider-tls'

new DataTlsCertificateCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesList.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesList.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesList.parameter.wrapsSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods"></a>

##### `get` <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesList.get"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesList.parameter.index"></a>

- *Type:* `number`

the index of the item to return.

---




### DataTlsCertificateCertificatesOutputReference <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference"></a>

#### Initializers <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.Initializer"></a>

```typescript
import { DataTlsCertificateCertificatesOutputReference } from '@cdktf/provider-tls'

new DataTlsCertificateCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.parameter.complexObjectIndex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.parameter.complexObjectIsFromSet"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties"></a>

##### `isCa`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.isCa"></a>

```typescript
public readonly isCa: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `issuer`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* `string`

---

##### `notAfter`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* `string`

---

##### `notBefore`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* `string`

---

##### `publicKeyAlgorithm`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.publicKeyAlgorithm"></a>

```typescript
public readonly publicKeyAlgorithm: string;
```

- *Type:* `string`

---

##### `serialNumber`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* `string`

---

##### `sha1Fingerprint`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.sha1Fingerprint"></a>

```typescript
public readonly sha1Fingerprint: string;
```

- *Type:* `string`

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* `string`

---

##### `subject`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* `number`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tls.DataTlsCertificateCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataTlsCertificateCertificates;
```

- *Type:* [`@cdktf/provider-tls.DataTlsCertificateCertificates`](#@cdktf/provider-tls.DataTlsCertificateCertificates)

---



