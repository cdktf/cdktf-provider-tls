# `tls_self_signed_cert`

Refer to the Terraform Registory for docs: [`tls_self_signed_cert`](https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert).

# `selfSignedCert` Submodule <a name="`selfSignedCert` Submodule" id="@cdktf/provider-tls.selfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SelfSignedCert <a name="SelfSignedCert" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert tls_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/selfsignedcert"

selfsignedcert.NewSelfSignedCert(scope Construct, id *string, config SelfSignedCertConfig) SelfSignedCert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig">SelfSignedCertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig">SelfSignedCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject">PutSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames">ResetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours">ResetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate">ResetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId">ResetSetAuthorityKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId">ResetSetSubjectKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris">ResetUris</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutSubject` <a name="PutSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject"></a>

```go
func PutSubject(value SelfSignedCertSubject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

---

##### `ResetDnsNames` <a name="ResetDnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames"></a>

```go
func ResetDnsNames()
```

##### `ResetEarlyRenewalHours` <a name="ResetEarlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours"></a>

```go
func ResetEarlyRenewalHours()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses"></a>

```go
func ResetIpAddresses()
```

##### `ResetIsCaCertificate` <a name="ResetIsCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate"></a>

```go
func ResetIsCaCertificate()
```

##### `ResetSetAuthorityKeyId` <a name="ResetSetAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId"></a>

```go
func ResetSetAuthorityKeyId()
```

##### `ResetSetSubjectKeyId` <a name="ResetSetSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId"></a>

```go
func ResetSetSubjectKeyId()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject"></a>

```go
func ResetSubject()
```

##### `ResetUris` <a name="ResetUris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris"></a>

```go
func ResetUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/selfsignedcert"

selfsignedcert.SelfSignedCert_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/selfsignedcert"

selfsignedcert.SelfSignedCert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/selfsignedcert"

selfsignedcert.SelfSignedCert_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/selfsignedcert"

selfsignedcert.SelfSignedCert_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SelfSignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem">CertPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal">ReadyForRenewal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference">SelfSignedCertSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime">ValidityEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime">ValidityStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput">AllowedUsesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput">DnsNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput">EarlyRenewalHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput">IpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput">IsCaCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput">PrivateKeyPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput">SetAuthorityKeyIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput">SetSubjectKeyIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput">SubjectInput</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput">UrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput">ValidityPeriodHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses">AllowedUses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames">DnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate">IsCaCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem">PrivateKeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId">SetAuthorityKeyId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris">Uris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertPem`<sup>Required</sup> <a name="CertPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem"></a>

```go
func CertPem() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `ReadyForRenewal`<sup>Required</sup> <a name="ReadyForRenewal" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal"></a>

```go
func ReadyForRenewal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject"></a>

```go
func Subject() SelfSignedCertSubjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference">SelfSignedCertSubjectOutputReference</a>

---

##### `ValidityEndTime`<sup>Required</sup> <a name="ValidityEndTime" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime"></a>

```go
func ValidityEndTime() *string
```

- *Type:* *string

---

##### `ValidityStartTime`<sup>Required</sup> <a name="ValidityStartTime" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime"></a>

```go
func ValidityStartTime() *string
```

- *Type:* *string

---

##### `AllowedUsesInput`<sup>Optional</sup> <a name="AllowedUsesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput"></a>

```go
func AllowedUsesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsNamesInput`<sup>Optional</sup> <a name="DnsNamesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput"></a>

```go
func DnsNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EarlyRenewalHoursInput`<sup>Optional</sup> <a name="EarlyRenewalHoursInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput"></a>

```go
func EarlyRenewalHoursInput() *f64
```

- *Type:* *f64

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput"></a>

```go
func IpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsCaCertificateInput`<sup>Optional</sup> <a name="IsCaCertificateInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput"></a>

```go
func IsCaCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `PrivateKeyPemInput`<sup>Optional</sup> <a name="PrivateKeyPemInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput"></a>

```go
func PrivateKeyPemInput() *string
```

- *Type:* *string

---

##### `SetAuthorityKeyIdInput`<sup>Optional</sup> <a name="SetAuthorityKeyIdInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput"></a>

```go
func SetAuthorityKeyIdInput() interface{}
```

- *Type:* interface{}

---

##### `SetSubjectKeyIdInput`<sup>Optional</sup> <a name="SetSubjectKeyIdInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput"></a>

```go
func SetSubjectKeyIdInput() interface{}
```

- *Type:* interface{}

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput"></a>

```go
func SubjectInput() SelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

---

##### `UrisInput`<sup>Optional</sup> <a name="UrisInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput"></a>

```go
func UrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValidityPeriodHoursInput`<sup>Optional</sup> <a name="ValidityPeriodHoursInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput"></a>

```go
func ValidityPeriodHoursInput() *f64
```

- *Type:* *f64

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses"></a>

```go
func AllowedUses() *[]*string
```

- *Type:* *[]*string

---

##### `DnsNames`<sup>Required</sup> <a name="DnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames"></a>

```go
func DnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `EarlyRenewalHours`<sup>Required</sup> <a name="EarlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours"></a>

```go
func EarlyRenewalHours() *f64
```

- *Type:* *f64

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses"></a>

```go
func IpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `IsCaCertificate`<sup>Required</sup> <a name="IsCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate"></a>

```go
func IsCaCertificate() interface{}
```

- *Type:* interface{}

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem"></a>

```go
func PrivateKeyPem() *string
```

- *Type:* *string

---

##### `SetAuthorityKeyId`<sup>Required</sup> <a name="SetAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId"></a>

```go
func SetAuthorityKeyId() interface{}
```

- *Type:* interface{}

---

##### `SetSubjectKeyId`<sup>Required</sup> <a name="SetSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId"></a>

```go
func SetSubjectKeyId() interface{}
```

- *Type:* interface{}

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris"></a>

```go
func Uris() *[]*string
```

- *Type:* *[]*string

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours"></a>

```go
func ValidityPeriodHours() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SelfSignedCertConfig <a name="SelfSignedCertConfig" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/selfsignedcert"

&selfsignedcert.SelfSignedCertConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedUses: *[]*string,
	PrivateKeyPem: *string,
	ValidityPeriodHours: *f64,
	DnsNames: *[]*string,
	EarlyRenewalHours: *f64,
	IpAddresses: *[]*string,
	IsCaCertificate: interface{},
	SetAuthorityKeyId: interface{},
	SetSubjectKeyId: interface{},
	Subject: github.com/cdktf/cdktf-provider-tls-go/tls.selfSignedCert.SelfSignedCertSubject,
	Uris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses">AllowedUses</a></code> | <code>*[]*string</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem">PrivateKeyPem</a></code> | <code>*string</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>*f64</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames">DnsNames</a></code> | <code>*[]*string</code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>*f64</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses">IpAddresses</a></code> | <code>*[]*string</code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate">IsCaCertificate</a></code> | <code>interface{}</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId">SetAuthorityKeyId</a></code> | <code>interface{}</code> | Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>interface{}</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris">Uris</a></code> | <code>*[]*string</code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses"></a>

```go
AllowedUses *[]*string
```

- *Type:* *[]*string

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem"></a>

```go
PrivateKeyPem *string
```

- *Type:* *string

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours"></a>

```go
ValidityPeriodHours *f64
```

- *Type:* *f64

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}

---

##### `DnsNames`<sup>Optional</sup> <a name="DnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames"></a>

```go
DnsNames *[]*string
```

- *Type:* *[]*string

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#dns_names SelfSignedCert#dns_names}

---

##### `EarlyRenewalHours`<sup>Optional</sup> <a name="EarlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours"></a>

```go
EarlyRenewalHours *f64
```

- *Type:* *f64

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses"></a>

```go
IpAddresses *[]*string
```

- *Type:* *[]*string

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}

---

##### `IsCaCertificate`<sup>Optional</sup> <a name="IsCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate"></a>

```go
IsCaCertificate interface{}
```

- *Type:* interface{}

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}

---

##### `SetAuthorityKeyId`<sup>Optional</sup> <a name="SetAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId"></a>

```go
SetAuthorityKeyId interface{}
```

- *Type:* interface{}

Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#set_authority_key_id SelfSignedCert#set_authority_key_id}

---

##### `SetSubjectKeyId`<sup>Optional</sup> <a name="SetSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId"></a>

```go
SetSubjectKeyId interface{}
```

- *Type:* interface{}

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject"></a>

```go
Subject SelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#subject SelfSignedCert#subject}

---

##### `Uris`<sup>Optional</sup> <a name="Uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris"></a>

```go
Uris *[]*string
```

- *Type:* *[]*string

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#uris SelfSignedCert#uris}

---

### SelfSignedCertSubject <a name="SelfSignedCertSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/selfsignedcert"

&selfsignedcert.SelfSignedCertSubject {
	CommonName: *string,
	Country: *string,
	Locality: *string,
	Organization: *string,
	OrganizationalUnit: *string,
	PostalCode: *string,
	Province: *string,
	SerialNumber: *string,
	StreetAddress: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName">CommonName</a></code> | <code>*string</code> | Distinguished name: `CN`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country">Country</a></code> | <code>*string</code> | Distinguished name: `C`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality">Locality</a></code> | <code>*string</code> | Distinguished name: `L`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization">Organization</a></code> | <code>*string</code> | Distinguished name: `O`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | Distinguished name: `OU`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode">PostalCode</a></code> | <code>*string</code> | Distinguished name: `PC`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province">Province</a></code> | <code>*string</code> | Distinguished name: `ST`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | Distinguished name: `SERIALNUMBER`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress">StreetAddress</a></code> | <code>*[]*string</code> | Distinguished name: `STREET`. |

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#common_name SelfSignedCert#common_name}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country"></a>

```go
Country *string
```

- *Type:* *string

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#country SelfSignedCert#country}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#locality SelfSignedCert#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#organization SelfSignedCert#organization}

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit"></a>

```go
OrganizationalUnit *string
```

- *Type:* *string

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#postal_code SelfSignedCert#postal_code}

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province"></a>

```go
Province *string
```

- *Type:* *string

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#province SelfSignedCert#province}

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber"></a>

```go
SerialNumber *string
```

- *Type:* *string

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#serial_number SelfSignedCert#serial_number}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress"></a>

```go
StreetAddress *[]*string
```

- *Type:* *[]*string

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/self_signed_cert#street_address SelfSignedCert#street_address}

---

## Classes <a name="Classes" id="Classes"></a>

### SelfSignedCertSubjectOutputReference <a name="SelfSignedCertSubjectOutputReference" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tls-go/tls/selfsignedcert"

selfsignedcert.NewSelfSignedCertSubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SelfSignedCertSubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit"></a>

```go
func ResetOrganizationalUnit()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince"></a>

```go
func ResetProvince()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber"></a>

```go
func ResetSerialNumber()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress"></a>

```go
func ResetStreetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput">StreetAddressInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress">StreetAddress</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput"></a>

```go
func OrganizationalUnitInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput"></a>

```go
func ProvinceInput() *string
```

- *Type:* *string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput"></a>

```go
func SerialNumberInput() *string
```

- *Type:* *string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput"></a>

```go
func StreetAddressInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress"></a>

```go
func StreetAddress() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() SelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

---



